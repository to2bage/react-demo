const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const htmlPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, "../src/index.html"),
    filename: "index.html"
})

const cleanPlugin = new CleanWebpackPlugin(["dist"]);

const miniCssExtractPlugin = new MiniCssExtractPlugin({
    filename: "[nam][hash].css",
    chunkFilename: "[id][hash].css"
})

module.exports = {
    mode: "production",
    entry: path.join(__dirname, "../src/index.js"),
    output: {
        filename: "main.[hash].js",
        path: path.join(__dirname, "./dist")
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            ident: "postcss",
                            plugins: (loader) => [
                                require("autoprefixer")()
                            ]
                        }
                    },
                ]
            }, {
                test: /\.styl(us)?$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            localIdentName: "[path][name]-[local]-[hash:8]"
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            ident: "postcss",
                            plugins: (loader) => [
                                require("autoprefixer")()
                            ]
                        }
                    },
                    "stylus-loader"
                ]
            }, {
                test: /\.js(x)?$/,
                loader: "babel-loader",
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        htmlPlugin,
        cleanPlugin,
        miniCssExtractPlugin
    ],
    resolve: {
        extensions: [".js", ".jsx"],
        alias: {
            "@": path.join(__dirname, "../src")
        }
    },
}