
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './src/js/index.js',
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist',
        watchContentBase: true
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            // {
            //     test: /\.(sa|sc|c)ss$/,
            //     use: [
            //         {
            //             loader: MiniCssExtractPlugin.loader
            //         },
            //         {
            //             loader: "css-loader",
            //         },
            //         {
            //             loader: "postcss-loader"
            //         },
            //         {
            //             loader: "sass-loader",
            //             options: {
            //                 implementation: require("sass")
            //             }
            //         }
            //     ]
            // },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            outputPath: 'images'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "bundle.css"
        })
    ]
};
