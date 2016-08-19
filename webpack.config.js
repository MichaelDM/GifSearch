const path = require('path');
const webpack = require('webpack');

const PATHS = {
  build: path.join(__dirname, 'build'),
  src: path.join(__dirname, 'src')
};

module.exports = {
  entry: {
    src: PATHS.src
  },
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      }
    ]
  },
  devServer: {
    contentBase: PATHS.build, // base path for the content.
    historyApiFallback: true, //enables support for history API fallback.
    hot: true, //adds the HotModuleReplacementPlugin and switch the server to hot mode.
    inline: true, //embed the webpack-dev-server runtime into the bundle.
    progress: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
