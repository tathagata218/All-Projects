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
        rules : [
            {
                test : /\.(css)$/,
                use : extraTextPlugin.extract({
                    fallback : 'style-loader',
                    use : ['css-loader'],
                    publicPath : './build'
                })
            },

            {
                test : /\.js$/,
                exclude : /node_modules/,
                use : "babel-loader"
            }
        ]
    }
    
}

