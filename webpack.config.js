const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const isProd = process.env.NODE_ENV === 'production';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');

let plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: isProd ? '"production"' : '"development"',
    },
  }),
  new webpack.NamedModulesPlugin(),
  new MiniCssExtractPlugin({
    filename: 'content/dam/css/[name].css',
    chunkFilename: '[id].css',
  })
];

const config = {
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  entry: {
    vendor: ['@babel/polyfill', 'react', 'react-dom', 'redux', 'pixi.js', 'gsap', 'lodash', 'axios'],
    app: './src/scripts/index.js',
  },
  output: {
    chunkFilename: '[id].[hash].js',
    path: path.join(__dirname, 'dist'),
    filename: 'content/dam/js/app.js',
  },
  resolve: {
    alias: {
      bodymovin: path.join(__dirname, 'vendor/bodymovin.min.js'),
      modernizr$: path.resolve(__dirname, '.modernizrrc'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /(node_modules|vendor)/,
      },
      {
        test: /\.(gif|png|jpg|woff|woff2|eot|svg|ttf|json)$/,
        use: 'file-loader',
        exclude: /(node_modules|vendor)/,
      },
      {
        test: /\.modernizrrc$/,
        loader: 'modernizr-loader!json-loader',
      },
    ],
  },
  plugins: plugins,
};

module.exports = config;
