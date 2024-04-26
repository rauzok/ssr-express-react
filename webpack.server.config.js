const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/server/server.js',
    target: 'node',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'server.bundle.js',
        libraryTarget: 'commonjs2',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                { from: 'src/client/favicon.ico', to: 'favicon.ico' },
            ],
        }),
    ],
};
