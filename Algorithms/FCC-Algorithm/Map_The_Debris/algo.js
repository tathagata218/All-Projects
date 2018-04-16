function orbitalPeriod(arr) {
    var avgAlt = arr[0]['avgAlt']
    var a = Math.pow((avgAlt+earthRadius),3)
    var result = 2*Math.PI*Math.pow( (a/GM) , 0.5)
    arr[0].orbitalPeriod = result
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    return arr;
  }
  
  orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);