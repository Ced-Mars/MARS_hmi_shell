const HtmlWebpackPlugin = require("html-webpack-plugin");
const deps = require("./package.json").dependencies;
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        port: 3000,
        static: './server/dist',
        open: true,
    },
};
