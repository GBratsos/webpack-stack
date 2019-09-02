const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const autoprefixer = require('autoprefixer');

module.exports = merge(common, {
  mode: 'development',
  devtool: "source-map",
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    hot: true,
    compress: true,
    port: 3000,
    open: true
  },
  module: {
    rules: [{
      test: /\.(sa|sc|c)ss$/,
      use: [
        {
          loader: "style-loader"
        },
        {
          loader: "css-loader", options: {
            sourceMap: true
          }
        },
        {
          loader: "postcss-loader",
          options: {
            autoprefixer: {
              browsers: ["last 2 versions"]
            },
            sourceMap: true,
            plugins: () => [
              autoprefixer
            ]
          },
        },
        {
          loader: "sass-loader", options: {
            sourceMap: true
          }
        }
      ]
    }],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})
