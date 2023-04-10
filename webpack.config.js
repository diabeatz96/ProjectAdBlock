const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const path = require("path");

module.exports = {
  entry: {
    app: ["./src/index.js"],
    killer: ["./src/killer.js"],
    vendors: ["react"]
  },
  output: {
    filename: '[name].js',
    path: __dirname + "/dist"
  },
  watch: true,
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
      {
        test: /\.(png|jpg)$/i,
        type: 'asset/resource',
        generator: {
            filename: 'icons/[name][ext]'
        }
     }
    ],
  },
  devtool: 'cheap-module-source-map',
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html"
    }),
    new HtmlWebPackPlugin({
      template: './public/options.html',
      filename: './options.html',
    }),
    new CopyWebpackPlugin({
        patterns: [{ from: "./src/manifest.json", to: "./" }, {from :"./src/rules_1.json", to: "./"}],
      }),
    new MiniCssExtractPlugin(),
  ]
};
