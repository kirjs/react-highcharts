const path = require('path');
const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = function (env) {
    env = env || {};
    let plugins = [];

    /**
     * If -p flag is set, minify the files
     * @type {boolean}
     */
    const src = !env.p;
    plugins.push(new webpack.DefinePlugin({
        isProdMode: JSON.stringify(src)
        })
    );

    const filenamePostfix = src ? '.src' : '';

    if (!src) {
        plugins.push(new UglifyJsPlugin())
    }

    /**
     * If -b flag is set, build bundles, and not exclude highcharts from the build
     * @type {boolean}
     */
    const bundles = env.b;
    const bundlePrefix = (bundles ? 'bundle/' : '');

    const highchartsExternals = {
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

    const reactExternals = {
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

    const externals = [reactExternals];

    externals.push(highchartsExternals);

    return {
        entry: {
            // Array syntax to workaround https://github.com/webpack/webpack/issues/300
            'index': ['./src/ReactHighcharts.jsx'],
            'ReactHighcharts': ['./src/ReactHighcharts.jsx'],
            'ReactHighstock': ['./src/Highstock.jsx'],
            'ReactHighmaps': ['./src/Highmaps.jsx'],
            'RedrawOnPrint': ['./src/RedrawOnPrint.jsx']
        },
        module: {
            rules: [
                {
                    test: /\.jsx$/,

                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['env', 'react', 'stage-2'],
                            plugins: ["add-module-exports"]
                        }
                    }
                }
            ]
        },
        plugins: plugins,
        externals: externals,
        resolve: {
            modules: [
                "node_modules"
            ]
        },
        output: {
            filename: 'dist/' + bundlePrefix + '[name]' + filenamePostfix + '.js',
            libraryTarget: 'umd',
            library: '[name]'
        }
    }
};
