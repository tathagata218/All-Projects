$(function(){
    console.log("ok");
    var config = {
        apiKey: "AIzaSyAzeSvLZBI6t4Hg7M3lVQOtdc5G3knRfM4",
        authDomain: "test-1-ea51e.firebaseapp.com",
        databaseURL: "https://test-1-ea51e.firebaseio.com",
        projectId: "test-1-ea51e",
        storageBucket: "test-1-ea51e.appspot.com",
        messagingSenderId: "624787554098"
      };
      firebase.initializeApp(config);
      
      var database = firebase.database();
      var nextArrivData;
      var minutesAwayData;
    
      

      

      $("#clickToAddTrain").on("click",function(event){
        console.log("click event");  
        var trainName= $("#nameTrain").val().trim();
        var trainDestin= $("#destinationTrain").val().trim();
        var trainTime= $("#timeTrain").val().trim();
        var trainFreq= $("#frequencyTrain").val().trim();
     
        //The first train time is last time the train arrived in the station and the (last train time needs to be minus/add the) next add the frequency

        // function trainTimeCalc(){
            var tFrequency = trainFreq;
            
               
                var firstTime = trainTime;
            
                // First Time (pushed back 1 year to make sure it comes before current time)
                var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
                console.log(firstTimeConverted);
            
                // Current Time
                var currentTime = moment();
                console.log("CURRENT TIME: " + moment(currentTime).format("HH:mm"));
            
                // Difference between the times
                var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
                console.log("DIFFERENCE IN TIME: " + diffTime);
            
                // Time apart (remainder)
                var tRemainder = diffTime % tFrequency;
                console.log(tRemainder);
            
                // Minute Until Train
                var tMinutesTillTrain = tFrequency - tRemainder;
                console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

                minutesAwayData=tMinutesTillTrain;
                
                // Next Train
                var nextTrain = moment().add(tMinutesTillTrain, "minutes");
                console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));
                nextArrivData=moment(nextTrain).format("hh:mm");
                
        // };

        // trainTimeCalc();

        

      
        
        database.ref("trains").push({
            Name:trainName,
            Destin:trainDestin,
            Time:trainTime,
            Freq:trainFreq,
            NextTrain:nextArrivData,
            MinutUntil:minutesAwayData
            

        });
    
        event.preventDefault();  
      });

      database.ref("trains").on("child_added", function(data1){
          console.log(data1.val());
          $("#nameOfTrain").append("<p>"+data1.val().Name+"</p>");
          $("#descriptionOfTrain").append("<p>"+data1.val().Destin+"</p>");
          $("#FrequencyOfTrain").append("<p>"+data1.val().Freq+"</p>");
          $("#arrivalOfTrain").append("<p>"+data1.val().NextTrain+"</p>");
          $("#minutesOfTrain").append("<p>"+data1.val().MinutUntil+"</p>");
          

      });

      $("#clickToClear").on("click",function(){
        $("#nameTrain").val("");
        $("#destinationTrain").val("");
        $("#timeTrain").val("");
        $("#frequencyTrain").val(""); 
      });
    


});