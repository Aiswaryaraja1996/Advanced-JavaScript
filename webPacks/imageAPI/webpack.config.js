const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].bundle.js',
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
};