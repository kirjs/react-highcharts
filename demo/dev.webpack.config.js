var path = require('path');

module.exports = {
  watch: true,
  entry: {
    index: '../index.jsx',
    more: '../more.jsx'
  },
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
    path:   path.join(__dirname, 'node_modules', 'react-highcharts'),
    filename: '[name].js',
    libraryTarget: 'umd',
    library: 'Highcharts'
  }
};