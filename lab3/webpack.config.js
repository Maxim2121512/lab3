const webpack = require("webpack");
const path = require("path");
const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const pages = fs.readdirSync(path.resolve(__dirname, "views")).filter(page => page.endsWith(".ejs"));

module.exports = {
    target: 'node',
    entry: {
        usersPage: path.resolve(__dirname, `public/javascripts/usersPage.js`),
        friendsPage: path.resolve(__dirname, `public/javascripts/friendsPage.js`),
        newsPage: path.resolve(__dirname, `public/javascripts/newsPage.js`),
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "./javascripts/[name].js"
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "less-loader"
                ],
                exclude: /node_modules/
            },
            {
                test: /\.ejs$/,
                use: {
                    loader: "ejs-loader",
                    options: {
                        esModule: false
                    }
                },
                exclude: /node_modules/
            },
            {
                test:/\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            }
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    compress: {
                        drop_console: true,
                        sequences: true
                    },
                    output: {
                        comments: false,
                    },
                },
                exclude: /node_modules/
            }),
        ],
    },
    plugins: [
        ...pages.map(page => new HtmlWebpackPlugin({
            template: path.resolve(__dirname, `views/${page}`),
            filename: `./html/${page.replace(/\.ejs/, '.html')}`,
        })),
    ]
};


