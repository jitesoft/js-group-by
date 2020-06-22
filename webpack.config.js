const Path = require('path');

module.exports = {
  mode: 'production',
  entry: [
    Path.join(__dirname, 'src', 'index.js')
  ],
  devtool: false,
  output: {
    libraryTarget: 'umd',
    library: '@jitesoft/group-by',
    filename: 'index.js',
    globalObject: 'this'
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
