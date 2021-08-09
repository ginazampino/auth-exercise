// Add path from Node:
const path = require('path');

// Add Webpack plugins to Webpack:
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    entry: { // Configure Webpack entry points:
        'main': path.join(__dirname, 'index')
    },

    // Configure Webpack output:
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: './'
    },

    module: {
        rules: [
            { // JavaScript loader:
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            { // CSS/SCSS loaders: 
                test: /\.(css|scss)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            { // Vue loader:
                test: /\.vue$/,
                loader: 'vue-loader'
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
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, 'index.html'),
            chunks: ['main']
        })
    ],

    // Define Webpack resolves:
    resolve: {
        alias: {
            '~': __dirname,
            'root': __dirname,
            'vue': 'vue/dist/vue.esm.js'
        },
        extensions: [
            '.json',
            '.js',
            '.css',
            '.scss'
        ]
    }
};