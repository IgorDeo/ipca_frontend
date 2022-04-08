import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
})


export default{
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      }
    ]
  },
  plugins: [HTMLWebpackPluginConfig]
}