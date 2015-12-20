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
        loader: 'babel'
      }
    ]
  },
  resolve: {
    alias: {
      "highmaps" : "highmaps-release/highmaps.src.js",
      "highcharts" : "highcharts-release/highcharts.src.js",
      "highcharts-more" : "highcharts-release/highcharts-more.src.js",
      "highcharts-standalone-adapter" : "highcharts-release/adapters/standalone-framework.src.js",
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
