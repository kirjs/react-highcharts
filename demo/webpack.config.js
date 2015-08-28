module.exports = {
  entry: {
    index: './src/index.jsx',
    more: './src/more.jsx'
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
      "highcharts" : "highcharts-release/highcharts.src.js",
      "highcharts-more" : "highcharts-release/highcharts-more.src.js",
      "highcharts-standalone-adapter" : "highcharts-release/adapters/standalone-framework.src.js",
      "react-highcharts/more": '../../src/More.jsx',
      "react-highcharts": '../../src/Highcharts.jsx'
    },
    modulesDirectories: ['node_modules']
  },
  output: {
    filename: 'dist/[name].js'
  }
};