module.exports = {
  watch: true,
  entry: {
    index: './index.jsx',
    more: './more.jsx',
    highmaps: './highmaps.jsx'
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
    filename: '[name].js',
    libraryTarget: 'umd',
    library: 'Highcharts'
  }
};