function insertionSort (a) {
    var arr = a;
    var bigNum;
    var smallNum;
        for (var i=0; i<arr.length-1; i++){
        if(arr[i]>arr[i+1]){
            bigNum = arr[i]
            smallNum = arr[i+1]
            arr[i+1] = bigNum
            arr[i] = smallNum
        
        for(var x=i; x > 0; x--){
            if(arr[x-1]>arr[x]){
                bigNum = arr[x-1]
                smallNum = arr[x]
                arr[x] = bigNum
                arr[x-1] = smallNum
            }
            else{break;}
        }
        
        }
    
            }
    console.log(arr);
    
    }   
    
    insertionSort([17,2,5,9,13,18,56,49,81,21,47,41,1]);