var path = require('path');
var webpack = require('webpack');

var SRC_DIR = path.join(__dirname, 'client/src');
var DIST_DIR = path.join(__dirname, 'client/public');

module.exports = {

  entry: `${SRC_DIR}/index.js`,
  output: {
    path: DIST_DIR,
    publicPath: '/',
    filename: 'bundle.js'

  },

  module: {
    rules: [
      {
        test: /.jsx?$/,
        include: SRC_DIR,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }

      }, {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
       {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
