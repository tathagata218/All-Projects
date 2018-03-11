function bubbleSort(arr){
    let arrLength = arr.length;
    let resultArr = arr;
    let check;
    
    do {
    check = false;
    
    for(let i=0; i<arrLength-1; i++){
    
        if(arr[i] > arr[i+1]){
            let firstNum = resultArr[i];
            let secondNum = resultArr[i+1];
    // In this condition you have make variable defineing one number in a position
          resultArr[i+1]=firstNum;
          resultArr[i]=secondNum;
          check = true;
        }
    console.log(check);
    console.log(resultArr);
    }
    }
    while(check);
    
    
    
    }
    
    
    
    bubbleSort([17,2,5,9,13,18,56,49,81,21,47,41,1]);