'use strict';

const webpackMerge = require('webpack-merge');
const ngw = require('@ngtools/webpack');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin    = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const cssnano = require('cssnano');
const CopyPlugin           = require('copy-webpack-plugin');

const commonConfig = require('./webpack.config.common');

const FileManagerPlugin = require('filemanager-webpack-plugin');

const helpers = require('./helpers');
const filemanager = require('./filemanager');

module.exports = webpackMerge(commonConfig, {
    mode: 'production',

    output: {
        path: helpers.root('dist'),
        publicPath: 'https://mia-nygren.github.io/model-viewer-demo/',
        filename: 'js/[hash].js',
        chunkFilename: 'js/[id].[hash].chunk.js'
    },

    optimization: {
        noEmitOnErrors: true,
        splitChunks: {
            chunks: 'all'
        },
        runtimeChunk: 'single',
        minimizer: [
            new TerserPlugin({
                cache: true,
                parallel: true,
                sourceMap: true, // Must be set to true if using source-maps in production
                terserOptions: {
                  // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
                }
              }),

            new OptimizeCSSAssetsPlugin({
                cssProcessor: cssnano,
                cssProcessorOptions: {
                    discardComments: {
                        removeAll: true
                    }
                },
                canPrint: false
            })
        ]
    },

    module: {
        rules: [{
            test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
            loader: '@ngtools/webpack'
        }]
    },

    plugins: [
        new ngw.AngularCompilerPlugin({
            tsConfigPath: helpers.root('tsconfig.aot.json'),
            entryModule: helpers.root('src', 'app', 'app.module#AppModule')
        }),
        new FileManagerPlugin({
            onStart: filemanager.onStart,
            onEnd: filemanager.onEnd
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            baseUrl: 'https://mia-nygren.github.io/model-viewer-demo/',
        }),
        new CopyPlugin([
            {
              from: 'node_modules/@webcomponents/webcomponentsjs/**/*js',
              to: 'polyfill/webcomponents/',
            },
          ]),
    ]
});