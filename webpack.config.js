var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var DIST_DIR = path.resolve(__dirname,'/dist');
var SRC_DIR = path.resolve(__dirname,'./src');

var config = {

    entry: SRC_DIR + '/index.js',
    output: {
               path: DIST_DIR + '/src',
               filename:'bundle.js'        
    },
    module:{
        rules:[ 
                { test: /\.(js)$/, use:'babel-loader' },
                { test:/\.(css)$/, use:['style-loader','css-loader'] } 
        ]
    },
    mode: 'development',
    plugins:[
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ]
}

module.exports = config;