module.exports = {
  entry: {
    index: './src/index.jsx',
    more: './src/more.jsx',
    highstock: './src/highstock.jsx',
    highmaps: './src/highmaps.jsx'
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
          presets: ['react','es2015', 'stage-2']
        }
      }
    ]
  },
  resolve: {
    alias: {
      "highcharts-more" : "highcharts/highcharts-more.src.js",
      "react-highcharts": '../../dist'
    },
    modulesDirectories: ['node_modules']
  },
  output: {
    path: 'dist/',
    filename: '[name].js',
    publicPath: '/'
  }
};
