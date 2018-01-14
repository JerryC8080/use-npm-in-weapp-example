const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: './src/npm/index.js',
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            options: {
                presets: ['es2015'],
            },
        }],
    },
    output: {
        filename: 'index.js',
        libraryTarget: 'umd',
        path: path.resolve(__dirname, 'dist/npm')
    },
    plugins: [
        new UglifyJSPlugin({
            parallel: true
        }),
    ]
};