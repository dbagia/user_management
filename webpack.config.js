var path = require('path')
var webpack = require('webpack')
var services = require('./src/api/services')
module.exports = {

    entry:[
        'babel-polyfill',
        './src'
    ],
    output:{
        filename:'bundle.js',
        path: __dirname + '/'
    },
    devtool: 'inline-source-map',
    devServer:{
        inline:true,
        port:8080,
        setup:function(app){
            app.get('/users', services.userService)
            app.get('/groups', services.groupService)
            app.post('/user',services.addUser)
        }
    },
    module:{
        rules:[
            {
                test: /[*]\.test\.js$/,
                use: 'mocha-loader',
                exclude: /node_modules/
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                enforce:'pre',
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
                options: {
                // eslint options (if necessary)
                    rules: {
                        
                    }
                }
            },
            {
                test:/\.js[x]?$/,
                exclude:'/node_modules/',
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['env']
                    }
                }
            }
            
        ]
    }
}