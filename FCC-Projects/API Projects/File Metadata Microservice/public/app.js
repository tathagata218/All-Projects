$(function(){

$('#file').change(function(e){
  e.preventDefault();
    let testfile = $('#file')["0"].files['0'].name;
    $('#displayfiles').html(testfile);
});


$('#submitBtn').click(function(e){
  e.preventDefault();
    let test2 = new FormData()
    test2['file'] =  $('#file')["0"].files["0"];
    let testfile = $('#file')["0"].files["0"];
    let testObject = {
      fileInfo : $('#file')["0"],
      fileData : $('#file')["0"].files,
      fileSpecsData : $('#file')["0"].files['0'],

    }
    console.log(testObject);
    console.log(test2);
    
  $.ajax({
    type: "POST",  
    URL:'/fileData',
    processData: false,
    contentType: false,
    cache :false,
    data : test2,
    success: function (){
      console.log('uploded')
    }
  }).done(()=>{
    console.log('Data Has been sent');
  })
    
    });



})