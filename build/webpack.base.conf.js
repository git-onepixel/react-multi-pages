/**
 * @file base conf
 * @author onepixel
 */

const path = require('path');
const webpack = require('webpack');
const config = require('../config');
const helper = require('./helper');

module.exports = {
  entry: helper.createPageEntries(),

  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': path.join(__dirname, '../src'),
    },
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
    ],
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      minChunks: config.entryChunks,
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks(module) {
        return (
          module.resource
          && /\.js$/.test(module.resource)
          && module.resource.indexOf(path.join(__dirname, '../node_modules')) === 0
        );
      },
      chunks: ['common'],
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      chunks: Infinity,
    }),
  ],
};
