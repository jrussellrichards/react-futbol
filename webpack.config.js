var HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "development",
    resolve: {
        extensions: [".js", ".jsx"],
    },
    module: {
        rules: [{
                test: /\.jsx?$/,
                loader: "babel-loader",
            },
            {
                test: /\.css$/,
                loader: [MiniCSSExtractPlugin.loader, "css-loader"],
            },
        ],
    },
    resolve: {
        extensions: [".js", ".jsx"],
        alias: {
            "@": path.resolve(__dirname, "src/"),
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
        new MiniCSSExtractPlugin(),
    ],
    devServer: {
        historyApiFallback: true,
    },
    externals: {
        // global app config object
        config: JSON.stringify({
            apiUrl: "http://localhost:5000",
            // apiUrl: "https://futbol-back.herokuapp.com/",
        }),
    },
};