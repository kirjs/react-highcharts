var path = require('path');
var src = (process.argv.indexOf('-p') === -1);
var filenamePostfix = src ? '.src': '';


module.exports = {
  entry: {
    // Array syntax to workaround https://github.com/webpack/webpack/issues/300
    'index': ['./src/ReactHighcharts.jsx'],
    'ReactHighcharts': ['./src/ReactHighcharts.jsx'],
    'ReactHighstock': ['./src/Highstock.jsx'],
    'ReactHighmaps': ['./src/Highmaps.jsx'],
    'RedrawOnPrint': ['./src/RedrawOnPrint.jsx'],
    'bundle/index': './src/bundle/ReactHighcharts.jsx',
    'bundle/ReactHighcharts': './src/bundle/ReactHighcharts.jsx',
    'bundle/ReactHighstock': './src/bundle/ReactHighstock.jsx',
    'bundle/ReactHighmaps': './src/bundle/ReactHighmaps.jsx'

  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'babel'
      }
    ]
  },
  externals: [
    {
      'react': true
    }
  ],
  resolve: {
    modulesDirectories: ['node_modules']
  },
  output: {
    filename: 'dist/[name]' + filenamePostfix + '.js',
    libraryTarget: 'umd',
    library: '[name]'
  }
};
