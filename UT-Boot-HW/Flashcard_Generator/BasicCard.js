var inquirer = require("inquirer");
var clear = require('clear');
// var constructorObject = require("./ClozeCard.js");
var basicFlashCardArr =[];
var lengthArr;
var count=0;

function BasicCard(back,front){
  
    this.back=back;
    this.front=front;
  

};

function callFlashCard(){

    inquirer.prompt([
        {type:"list",
        message:"Please Choose your Card option!!!",
        choices:["ADD_Flash_card", "Play_Flash_Card","exit_Game"],
        name:"information"},
        
    ]).then(function(data){
        

        if(data.information === "ADD_Flash_card"){
            addFlashCard();
        }
        else if (data.information === "Play_Flash_Card"){
            playGame();

        }else if(data.information === "exit_Game"){
            clear();

        }
    });


}

function addFlashCard(){
    inquirer.prompt([
        {
            type:"input",
            message:"Front of the Card: ",
            name:"cardFront"
        },
        {
            type:"input",
            message:"Back of the Card: ",
            name:"cardBack"
        }
    ]).then(function(data1){
        var basicFlashCard= new BasicCard(data1.cardBack,data1.cardFront);
        basicFlashCardArr.push(basicFlashCard);
        console.log(basicFlashCardArr);
        lengthArr=basicFlashCardArr.length;
        console.log(lengthArr);        
        callFlashCard();
    });

    
};

function playGame(){
   

    inquirer.prompt([
        {type:"input",
        message:JSON.stringify(basicFlashCardArr[count].front),
        name:"answer"}]).then(function (data) {
            if(data.answer === basicFlashCardArr[count].back){
                console.log("you got it right!!!!");
                console.log(lengthArr);
                count++;
                
                if(count==lengthArr){
                    console.log("Game Over!!!!");
                    count=0;
                    callFlashCard();
                }
                else{playGame();}   
            }
            else if(data.answer !== basicFlashCardArr[count].back){
                console.log("you got it wrong!!!");
                count++;
                               
                
                if(count==lengthArr){
                    console.log(' ');
                    console.log("Game Over!!!!");
                    console.log(" ");
                    count=0;
                    callFlashCard();
                }
                else{playGame();}
            }
            

        });
};

if(process.argv[2]=="Basic"){
callFlashCard();

}


module.exports=BasicCard;