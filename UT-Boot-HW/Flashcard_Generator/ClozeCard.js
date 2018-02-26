var constructorObject = require("./BasicCard.js");
var inquirer = require("inquirer");
var clear = require('clear');
var cardsArray=[];

var count=0;

function clozecCard(text, cloze){
    this.fullQuestion=text;
    this.pirtailQuestion=cloze;
};

clozecCard.prototype.partial=function(){
    var str = this.fullQuestion; 
    var str2 = this.pirtailQuestion;
    var result = str.replace(str2, '-----------');
return result;
};


function callClozeCard(){
    
        inquirer.prompt([
            {type:"list",
            message:"Please Choose your Card option!!!",
            choices:["ADD_Cloze_card", "Play_Cloze_Card","exit_Game"],
            name:"information"},
            
        ]).then(function(data){
            
            console.log(data);
    
            if(data.information === "ADD_Cloze_card"){
                addFlashCard();
            }
            else if (data.information === "Play_Cloze_Card"){
                playGame();
    
            }else if(data.information === "exit_Game"){
                clear();
    
            }
        });
    
    
    };

function addFlashCard(){
    inquirer.prompt([
        {
            type:"input",
            message:"FUll Sentence: ",
            name:"fullSentence"
        },
        {
            type:"input",
            message:"Hidden Part of the Sentence: ",
            name:"hiddenPart"
        }
    ]).then(function(data1){
        var newSlic=new clozecCard(data1.fullSentence,data1.hiddenPart);
        var item=newSlic.partial()
        cardsArray.push({fullSent:data1.fullSentence,parcedSent:item});
        console.log(cardsArray);
        
              
        callClozeCard()
    });
  
};







//these are all the questions and answers for the falshcards

 if(process.argv[2]==="Coze-Deleted") {
    callClozeCard();
}