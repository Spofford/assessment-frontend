var cssnext = require('postcss-cssnext')
var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: "eval",
  entry: [
    "whatwg-fetch",
    "webpack-dev-server/client?http://localhost:3000",
    "./app/index"
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader'
        ]
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/,
        include: path.join(__dirname, 'app')
      },

      {
        test: /\.css$/,
        loader: 'style!css?modules&importLoaders=1&localIdentName=[local]_[hash:base64:5]!postcss',
        include: path.join(__dirname, 'app'),
        exclude: /node_modules/
      }

    ]
  },
  resolve: {
    extensions: [ '', '.js' ],
    fallback: path.join(__dirname, "node_modules")
  },
  resolveLoader: {
    fallback: path.join(__dirname, "node_modules")
  },
  postcss: function () {
    return [cssnext]
  }
}
