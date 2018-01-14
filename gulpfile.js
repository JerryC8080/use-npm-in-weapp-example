const gulp = require('gulp');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const webpackConfig = {
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
    },
    plugins: [
        new UglifyJSPlugin({
            parallel: true
        }),
    ]
};

// 打包 npm 依赖
gulp.task('npm', () => {
    gulp.src('./src/npm/*.js')
        .pipe(webpackStream(webpackConfig), webpack)
        .pipe(gulp.dest('./dist/npm'));
});