module.exports = {
    watch: true,
    entry: {
        more: './more.jsx',
        index: './index.jsx'
    },
    module: {
        loaders: [
            {test: /\.jsx$/, loader: 'jsx?harmony'}
        ]
    },
    output: {
        path: 'dist',
        filename: '[name].js'
    }
};