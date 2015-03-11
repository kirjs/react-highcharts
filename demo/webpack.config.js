module.exports = {
  watch: true,
  entry: './index.jsx',
  module: {
    loaders: [
      {test: /\.jsx$/, loader: 'jsx?harmony'}
    ]
  },


  output: {
    path: 'dist',
    filename: 'index.js'
  }
};