const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
 
module.exports = {
    devtool: 'source-map',
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }, {
                test: /\.(jpeg|png|gif|svg)$/,
                loader: 'file-loader'
            }, {
                test: /\.(mp3)$/,
                loader: 'file-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })
    ]
 
};
