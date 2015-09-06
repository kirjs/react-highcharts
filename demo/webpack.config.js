module.exports = {
  entry: {
    index: './src/index.jsx',
    more: './src/more.jsx',
    highstock: './src/highstock.jsx'
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'babel'
      }
    ]
  },
  resolve: {
    alias: {
      "highstock" : "highstock-release/highstock.src.js",
      "highcharts" : "highcharts-release/highcharts.src.js",
      "highcharts-more" : "highcharts-release/highcharts-more.src.js",
      "highcharts-standalone-adapter" : "highcharts-release/adapters/standalone-framework.src.js",
      "react-highcharts/more": '../../src/More.jsx',
      "react-highcharts/highstock": '../../src/Highstock.jsx',
      "react-highcharts": '../../src/Highcharts.jsx'
    },
    modulesDirectories: ['node_modules']
  },
  output: {
    path: 'dist/',
    filename: '[name].js',
    publicPath: '/'
  }
};