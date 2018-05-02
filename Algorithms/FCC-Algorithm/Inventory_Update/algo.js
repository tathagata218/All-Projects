function updateInventory(arr1, arr2) {
    var fullArr = arr1.concat(arr2);
    var resultArr = []; 
   
    for(var i = 0; i < fullArr.length; i++){
        for(var x = i+1; x < fullArr.length - 1 ; x++){
            
            if(fullArr[i][1] === fullArr[x][1]){
                let add = fullArr[i][0] + fullArr[x][0]
                fullArr.splice(i,1,[add,fullArr[i][1]])
                fullArr.splice(x,1);
                
                
            }
           
        }
    }

    



   console.log(fullArr);
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
