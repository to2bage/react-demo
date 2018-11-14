const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, "../src/index.html"),
    filename: "index.html"
})

module.exports = {
    mode: "development",
    entry: path.join(__dirname, "../src/index.js"),
    output: {
        filename: "main.js",
        path: path.join(__dirname, "./dist")
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            sourceMap: true,
                            ident: "postcss",
                            plugins: (loader) => [
                                require("autoprefixer")()
                            ]
                        }
                    }
                ]
            }, {
                test: /\.styl(us)?$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                            modules: true,      // switch css module
                            localIdentName: "[path][name]-[local]-[hash:8]"
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            sourceMap: true,
                            ident: "postcss",
                            plugins: (loader) => [
                                require("autoprefixer")()
                            ]
                        }
                    },
                    {
                        loader: "stylus-loader",
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }, {
                test: /\.js(x)?$/,
                use: "babel-loader",
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        htmlPlugin,
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        extensions: [".js", ".jsx"],
        alias: {
            "@": path.join(__dirname, "../src")
        }
    },
    devServer: {
        contentBase: path.join(__dirname, "./dist"),
        host: "127.0.0.1",
        port: 8964,
        hot: true,
        progress: true,
        compress: true,
        open: true,
    }
}