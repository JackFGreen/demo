var webpack = require('webpack');

module.exports = {
    entry: ['./entry.js'],
    output: {
        path: './dist',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url?mimetype=image/png&limit=10000&name=images/[name].[ext]'
            }
        ]
    },
    plugins: [
        // new webpack.BannerPlugin('bundle.js注释')
    ]
}