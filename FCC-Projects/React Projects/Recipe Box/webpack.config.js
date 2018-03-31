const webpack = require('webpack');
const path  = require('path');



module.exports = {
    entry :{
        app : "./src/app.js"
    },
    output : {
        path : path.resolve(__dirname, "client"),
        filename: "js/[name].js"
    },
    
    module : {
        rules : 
    }
    
}

