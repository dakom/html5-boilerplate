'use strict';

var CommonConfig = require('../common.config.js');

var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: CommonConfig.GetWebpackEntries(process.env.NODE_ENV),
    
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    output: {
        path: path.resolve(__dirname, '../' + CommonConfig.GetWebpackOutputFolder(process.env.NODE_ENV)),
        filename: '[name].js',
        chunkFilename: '[chunkhash].js'
    },
    devtool: CommonConfig.GetWebpackDevTool(process.env.NODE_ENV),

    module: {
        rules: [
            {
                test: /\.js$/,
                use: ["source-map-loader"],
                enforce: "pre"
            },
            {
                test: /\.ts$/,
                loader: "ts-loader",
                options: {
                    configFileName: "./_config/tsconfig.json"
                }
            },
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            DIST_SERVER: JSON.stringify(CommonConfig.GetInfo("dist",  process.env.NODE_ENV)),
            CDN_SERVER: JSON.stringify(CommonConfig.GetInfo("cdn",  process.env.NODE_ENV))
        }),

        new HtmlWebpackPlugin({
            JS_LIB_INCLUDES: CommonConfig.GetInfo("html-template", process.env.NODE_ENV),
            DIST_SERVER: CommonConfig.GetInfo("dist", process.env.NODE_ENV),
            CDN_SERVER: CommonConfig.GetInfo("cdn",  process.env.NODE_ENV),
            hash: true,
            template: CommonConfig.GetWebpackHtmlTemplate(process.env.NODE_ENV),
            chunks: ['bundle']
        })
    ],

    externals: CommonConfig.GetWebpackExcludes(), 
    

    devServer: {
        contentBase: path.join(__dirname, "src"),
        compress: true,
        port: CommonConfig.GetDevServerPort(),
        host: CommonConfig.GetLocalLanIp()
    }
};