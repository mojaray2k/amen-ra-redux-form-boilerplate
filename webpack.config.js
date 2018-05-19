const path = require('path');
module.exports = {
    entry: './index.js',
    output: {
        filename: './bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [
                    path.resolve(__dirname, 'src')
                ],
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        contentBase: './',
        compress: true,
        port: 8081
    }
};