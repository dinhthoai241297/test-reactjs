const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: [
        'webpack-hot-middleware/client?reload=true',
        path.resolve(__dirname, './src/index')
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist'
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/
            },
            {
                use: ['style-loader', 'css-loader'],
                test: /\.css$/
            },
            {
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }
                ],
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/
            },
            {
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'imgs/'
                        }
                    }
                ],
                test: /\.(png|jpg|gif)$/
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new UglifyJSPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
};