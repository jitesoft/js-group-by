const Path = require('path');

module.exports = {
  mode: 'production',
  entry: [
    Path.join(__dirname, 'src', 'index.js')
  ],
  optimization: {
    minimize: true
  },
  output: {
    libraryTarget: 'umd',
    library: 'OrderBy',
    filename: 'index.js',
    globalObject: "typeof self !== 'undefined' ? self : this"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        loader: 'babel-loader'
      }
    ]
  }
};
