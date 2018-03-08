const webpack = require('webpack');
const path = require('path');
const htmlwebpackplugin = require('html-webpack-plugin');
const extraTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
        entry : {
            app : "./src/app.js"
        },
        output : {
            path : path.resolve(__dirname,'client'),
            filename : 'js/[name].js'
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
    },
    
    plugins : [
        new htmlwebpackplugin({
            title : "Camper Leaderboard",
            minify : {
                collapseWhitespace : true
            },
            hash: false,
            inject : true,
            template : path.resolve(__dirname,"src/index.html")
        }),

        new extraTextPlugin({
            filename : 'css/[name].css',
            allChunks : true,
            disable : false,
            ignoreOrder : true 
            
        }),

        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ]
    
}

 




