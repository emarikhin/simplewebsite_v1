const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/app.js', // entry point
    output: {
        filename: "bundle.[chunkhash].js", // a compiled file
        path: path.resolve(__dirname, 'public') // path to bundle.js
    },
    devServer: {
        port: 3000 // dev server port
    },
    plugins: [
        new HTMLPlugin({
            template: "./src/index.html"
        }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
}