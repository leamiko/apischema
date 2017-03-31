module.exports = {
  entry: './index.js',
  output: {
    filename: 'dist/apischema.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
    ],
  },
};
