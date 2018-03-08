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
    }
},




