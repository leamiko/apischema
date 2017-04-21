module.exports = {
  entry: './lib/apischema.js',
  output: {
    filename: 'dist/apischema.js',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          plugins: ['transform-object-assign'],
        },
      },
    ],
  },
};
