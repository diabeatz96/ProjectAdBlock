const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: __dirname + "/dist"
  },
  module: {
    rules: [
      {
        test: /\.js$|jsx/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      { test: /\.css$/, use: [ MiniCssExtractPlugin.loader, // instead of style-loader
      'css-loader' ] },
    ],
  },
  devtool: 'cheap-module-source-map',
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html"
    }),
    new CopyWebpackPlugin({
        patterns: [{ from: "./public/manifest.json", to: "./" }],
      }),
    new MiniCssExtractPlugin(),
  ]
};
