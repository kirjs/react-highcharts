const path = require('path');

module.exports = {
    entry: {
        index: './src/index.jsx',
        more: './src/more.jsx',
        highstock: './src/highstock.jsx',
        highmaps: './src/highmaps.jsx'
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                use: [{
                    loader: 'babel-loader',
                    query: {
                        cacheDirectory: true,
                      presets: ['env', 'react', 'stage-2'],
                    }

                }]
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }

        ]
    },
    resolve: {
        alias: {
            "highcharts-more": "highcharts/highcharts-more.src.js",
            "highcharts-exporting": "highcharts/modules/exporting.src.js",
            "react-highcharts": '../../dist'
        },
        modules: ['node_modules']
    },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: '[name].js',
        publicPath: '/'
    }
};
