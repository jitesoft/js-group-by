const Path = require('path');
const UglifyPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: 'production',
  plugins: [
    new UglifyPlugin()
  ],
  entry: [
    Path.join(__dirname, 'src', 'index.js')
  ],
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
