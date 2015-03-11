module.exports = {
  watch: true,
  entry: './index.jsx',
  module: {
    loaders: [
      {test: /\.jsx$/, loader: 'jsx?harmony'}
    ]
  },
  externals: {
    'react/addons': 'react/addons',
    'react': 'react'
  },

  output: {
    filename: 'index.js',
    libraryTarget: 'umd',
    library: 'Highcharts'
  }
};