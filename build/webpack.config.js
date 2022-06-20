const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const { HotModuleReplacementPlugin, ProvidePlugin } = require('webpack')

module.exports= (env, argv) => {
  const prod = argv.mode === "production";
  return {
    mode: prod ? "production" : "development",
    devtool: prod ? "hidden-source-map" : "eval",
    entry: "./renderer/index.tsx",
    output: {
      path: path.join(__dirname, "./../dist"),
      filename: "bundle.js",
      
    },
    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: ["babel-loader", "ts-loader"]
        },
      ],
    },
    devServer: {
      port: 3000,
      hot: true,
    },
    plugins: [
      new ProvidePlugin({
        React: "react",
      }),
      new HtmlWebpackPlugin({
        template: "./renderer/index.html",
      }),
      new HotModuleReplacementPlugin()
    ],
  }
}