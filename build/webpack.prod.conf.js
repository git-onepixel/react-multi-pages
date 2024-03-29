/**
 * @file build configuration
 */

const webpack = require('webpack');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
const baseWebpackConfig = require('./webpack.base.conf');
const config = require('./config');
const helper = require('./helper');

const assetsPath = (filename) => `${config.build.assetsSubDirectory}/${filename}`;

module.exports = merge(baseWebpackConfig, {
  output: {
    path: config.build.assetsRoot,
    publicPath: config.build.assetsPublicPath,
    filename: assetsPath('js/[name].[chunkhash:8].js'),
  },

  devtool: config.build.useSourceMap ? config.build.devtool : false,

  module: {
    rules: [
      helper.createStyleLoader(true),
      helper.createImageLoader(
        assetsPath('img/[name].[contenthash:8].[ext]'),
      ),
      helper.createFontLoader(
        assetsPath('fonts/[name].[contenthash:8].[ext]'),
      ),
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: config.build.env,
      },
    }),

    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      sourceMap: config.build.useSourceMap,
    }),

    new ExtractTextPlugin({
      filename: assetsPath('css/[name].[contenthash:8].css'),
    }),

    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        safe: true,
      },
    }),

    ...helper.createHtmlWebpackPlugins(true),
  ],
});
