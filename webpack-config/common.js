const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry : "./src/index.js",
    output : {
        filename : "main.js",
        path : path.resolve(__dirname, '../dist'),
    },
    plugins:[
        new MiniCssExtractPlugin({ filename : 'styles.css' }),
        new HtmlWebpackPlugin({ template : './src/index.html' }),
        new CopyWebpackPlugin({ patterns : [{ from : './src/public', to : path.resolve(__dirname, '../dist/public') }]}),
        new CleanWebpackPlugin(),
        new Dotenv()
    ],
    module : {
        rules : [
            {
                test : /\.js/,
                exclude : /node_modules/,
                use : {
                    loader : 'babel-loader',
                    options : {
                        presets : [
                            "@babel/preset-env",
                        ]
                    }
                }
            },
            {
                test : /\.sass$/,
                use : [MiniCssExtractPlugin.loader,"css-loader","sass-loader"]
            }
        ]
    }
}