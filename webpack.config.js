var path = require('path');

module.exports = {
  entry: {
    highcharts: ['./src/Highcharts.jsx'], // Array syntax to workaround https://github.com/webpack/webpack/issues/300
    more: './src/More.jsx'
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
      'react/addons': true,
      'react': true
    },
    function(context, request, callback) {
      if (request === './Highcharts.jsx') {
        // Exclude highcharts.js from more.js
        // Resolves https://github.com/kirjs/react-highcharts/issues/9
        callback(null, './highcharts');
      } else {
        callback();
      }
    }
  ],
  resolve: {
    alias: {
      "highcharts" : "highcharts-release/highcharts.src.js",
      "highcharts-more" : "highcharts-release/highcharts-more.src.js",
      "highcharts-standalone-adapter" : "highcharts-release/adapters/standalone-framework.src.js"
    },
    modulesDirectories: ['node_modules']
  },
  output: {
    filename: 'dist/[name].js',
    libraryTarget: 'umd',
    library: 'Highcharts'
  }
};