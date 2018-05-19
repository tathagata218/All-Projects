"use strict"


function pairwise(arr,arg) {
    let result=[] 
    let output=0;
    for(let i=0; i<arr.length; i++) {
        for(let x= i+1; x<arr.length; x++){
            if(arr[i] + arr[x] === arg){
                result.push(i,x)
            }
        }
        
    }
    result.forEach((num) => {
       return output += num
    })
    console.log(output)
 }

 pairwise([1,4,2,3,0,5], 7);
