var path = require('path');

/**
 * If -p flag is set, minify the files
 * @type {boolean}
 */
var src = (process.argv.indexOf('-p') === -1);
var filenamePostfix = src ? '.src' : '';

/**
 * If -b flag is set, build bundles, and not exclude highcharts from the build
 * @type {boolean}
 */
var bundles = (process.argv.indexOf('-b') !== -1);
var bundlePrefix = (bundles ? 'bundle/' : '');


var highchartsExternals = {
  'highcharts/highmaps': {
    root: 'Highcharts',
    commonjs2: 'highcharts/highmaps',
    commonjs: 'highcharts/highmaps',
    amd: 'highcharts/highmaps'
  },
  'highcharts/highstock': {
    root: 'Highcharts',
    commonjs2: 'highcharts/highstock',
    commonjs: 'highcharts/highstock',
    amd: 'highcharts/highstock'
  },
  'highcharts': {
    root: 'Highcharts',
    commonjs2: 'highcharts',
    commonjs: 'highcharts',
    amd: 'highcharts'
  }
};

var reactExternals = {
  react: {
    root: 'React',
    commonjs2: 'react',
    commonjs: 'react',
    amd: 'react'
  },
  'react-dom': {
    root: 'ReactDOM',
    commonjs2: 'react-dom',
    commonjs: 'react-dom',
    amd: 'react-dom'
  }
};

var externals = [reactExternals];

externals.push(highchartsExternals);


module.exports = {
  entry: {
    // Array syntax to workaround https://github.com/webpack/webpack/issues/300
    'index': ['./src/ReactHighcharts.jsx'],
    'ReactHighcharts': ['./src/ReactHighcharts.jsx'],
    'ReactHighstock': ['./src/Highstock.jsx'],
    'ReactHighmaps': ['./src/Highmaps.jsx'],
    'RedrawOnPrint': ['./src/RedrawOnPrint.jsx']
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
  externals: externals,
  resolve: {
    modulesDirectories: ['node_modules']
  },
  output: {
    filename: 'dist/' + bundlePrefix + '[name]' + filenamePostfix + '.js',
    libraryTarget: 'umd',
    library: '[name]'
  }
};
