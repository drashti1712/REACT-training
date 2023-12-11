const webpack = require('webpack'); // CommonJS module system
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.[contenthash:8].js"
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            use: "babel-loader",
            exclude: /node_modules/
        },
        {
            test: /\.tsx?$/,
            use: "ts-loader",
            exclude: /node_modules/
        }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "public/index.html")
    })],
}


