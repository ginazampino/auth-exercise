// Add path from Node:
const path = require('path');

// Add Webpack plugins to Webpack:
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    entry: { // Configure Webpack entry points:
        main: path.join(__dirname, 'index')
    },

    // Configure Webpack output:
    output: {
        path: path.resolve(__dirname, '../build'),
        filename: 'bundle.js',
        publicPath: '/'
    },

    module: {
        rules: [
            { // JavaScript loader:
                test: /\.js$/,
                loader: 'babel-loader'
            },
            { // Vue loader:
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            { // CSS/SCSS loaders: 
                test: /\.(css|scss)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            { // File loader (images):
                test: /\.(jpg|jpeg|png|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: 'images/[name].[ext]',
                    esModule: false
                }
            },
            { // File loader (fonts):
                test: /\.(woff(2)?|ttf|eot)$/,
                loader: 'file-loader',
                options: {
                    name: 'fonts/[name].[ext]'
                }
            }
        ]
    },

    // Initialize Webpack plugins:
    plugins: [
        // Remove yellow erros from devtools:
        new webpack.DefinePlugin({
            __VUE_OPTIONS_API__: false,
            __VUE_PROD_DEVTOOLS__: false
        }),
        // Set up html-webpack-plugin:
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './index.html'),
            filename: 'index.html'
        }),
        // Configure vue-loader:
        new VueLoaderPlugin()
    ],

    // Define Webpack resolves:
    resolve: {
        extensions: ['.json', '.js', '.vue', '.css', '.scss']
    },

    // Reduce the amount of information Webpack logs to the console:
    stats: 'minimal'
};