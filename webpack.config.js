const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: { src: './client/index.js' },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: '/node_modules/',
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
      {
        test: /\.(sa|sc|c)ss$/, // styles files
        exclude: '/node_modules/',
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  devServer: {
    host: '127.0.0.1',
    port: 8080,
    hot: true,
    historyApiFallback: true,
    static: {
      directory: path.resolve(__dirname, 'build'),
      publicPath: '/build',
    },
    proxy: {
      '/api/**': {
        target: 'http://localhost:3000/',
        secure: false,
      },
    },
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
      template: './client/index.html',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
