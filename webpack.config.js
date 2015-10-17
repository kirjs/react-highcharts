var path = require('path');

module.exports = {
  entry: {
    // Array syntax to workaround https://github.com/webpack/webpack/issues/300
    'index': ['./src/Highcharts.jsx'],
    'highcharts': ['./src/Highcharts.jsx'],
    'highstock': ['./src/Highstock.jsx'],
    'highmaps': ['./src/Highmaps.jsx'],
    'bundle/index': './src/bundle/Highcharts.jsx',
    'bundle/highcharts': './src/bundle/Highcharts.jsx',
    'bundle/highstock': './src/bundle/Highstock.jsx',
    'bundle/highmaps': './src/bundle/Highmaps.jsx'

  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'babel'
      }
    ]
  },
  externals:
  [
    {
      'react': true
    }
  ],
  resolve: {
    alias: {
      "highstock" : "highstock-release/highstock.src.js",
      "highcharts" : "highcharts-release/highcharts.src.js",
      "highmaps" : "highmaps-release/highmaps.src.js",
      "highcharts-more" : "highcharts-release/highcharts-more.src.js",
      "highcharts-standalone-adapter" : "highcharts-release/adapters/standalone-framework.src.js",
    },
    modulesDirectories: ['node_modules']
  },
  output: {
    filename: 'dist/[name].js',
    libraryTarget: 'umd',
    library: 'Highcharts'
  }
};
