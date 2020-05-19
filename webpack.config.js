const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry:{
        main: "./src/js/index.js",
    },
    output: {
        filename: "js[name].[chunkhash:5].js",
    },
    module: {
        rules: [
            {
                test: /\.less$/, 
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "less-loader"
                    }
                ]
            },
            {
                test: /\.(png)|(jpg)|(gif)$/,
                use: [
                    "url-loader?limit=10000",
                    "img-loader"
                ]
            }
        ]
    },
    devServer: {
        open: true
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        }),
    ]
}