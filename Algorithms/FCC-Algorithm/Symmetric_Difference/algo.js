function sym() {
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
        args.push(arguments[i]);
    }

    function symDiff(arrOne, arrTwo) {
        var result = [];

        arrOne.forEach(function(item) {
            if (arrTwo.indexOf(item) < 0 && result.indexOf(item) < 0) {
                result.push(item);
            }
        });

        arrTwo.forEach(function(item) {
            if (arrOne.indexOf(item) < 0 && result.indexOf(item) < 0) {
                result.push(item);
            }
        });

        return result;
    }

 
    return args.reduce(symDiff);
}