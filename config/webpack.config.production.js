const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const config = require('./webpack.config.base');

const GLOBALS = {
  'process.env': {
    'NODE_ENV': JSON.stringify('production'),
    'API_URL':  JSON.stringify(process.env.API_URL),
    'CLOUDINARY_CLOUD_NAME': JSON.stringify(process.env.CLOUDINARY_CLOUD_NAME),
    'CLOUDINARY_CNAME': JSON.stringify(process.env.CLOUDINARY_CNAME),
    'GA': JSON.stringify(process.env.GA),
    'GTM': JSON.stringify(process.env.GTM),
  },
  __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
};

module.exports = merge(config, {
  debug: false,
  devtool: 'cheap-module-source-map',
  entry: {
    application: 'production',
    vendor: ['react', 'react-dom', 'react-redux', 'react-router', 'react-router-redux', 'redux']
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: path.join(__dirname, '../src/assets/images'),
        to: 'images'
      },
      {from: './robots.txt', to: '.'}
    ]),
    // Avoid publishing files when compilation fails
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin(GLOBALS),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        'screw_ie8': true
      },
      output: {
        comments: false
      },
      sourceMap: false
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new ExtractTextPlugin({
      filename: 'css/app.css',
      allChunks: true
    })
  ],
  module: {
    noParse: /\.min\.js$/,
    loaders: [
      // Sass
      {
        test: /\.scss$/,
        include: [
          path.resolve(__dirname, '../src/assets/javascripts'),
          path.resolve(__dirname, '../src/assets/styles'),
          path.resolve(__dirname, '../src/scripts')
        ],
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style',
          loader: [
            { loader: 'css', query: { sourceMap: true } },
            'postcss',
            {
              loader: 'sass',
              query: {
                outputStyle: 'compressed',
                includePaths: [
                  path.resolve(__dirname, "../src/assets/styles"),
                  // Bootstrap loader
                  // path.resolve(__dirname, "../node_modules/bootstrap-sass/assets/stylesheets/")
                ]
              }
            }
          ]
        })
      },
      // Sass + CSS Modules
      // {
      //   test: /\.scss$/,
      //   include: /src\/assets\/javascripts/,
      //   loader: ExtractTextPlugin.extract({
      //     fallbackLoader: 'style',
      //     loader: [
      //       {
      //         loader: 'css',
      //         query: {
      //           modules: true,
      //           importLoaders: 1,
      //           localIdentName: '[path][name]__[local]--[hash:base64:5]'
      //         }
      //       },
      //       'postcss',
      //       { loader: 'sass', query: { outputStyle: 'compressed' } }
      //     ]
      //   })
      // },
      // CSS
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style',
          loader: ['css', 'postcss']
        })
      }
    ]
  },
});
