import path from 'path';
import uglify from './uglify';
import webpack from 'webpack';
import loadDependencies from '../utils/load-dependencies';
import { env, includeNotListed, excludeFromListed, sourceAssets, publicAssets } from './index';

export default function generateWebpackConfig() {
  const src = path.resolve(`${sourceAssets}/js/`);
  const dest = `${publicAssets}/js/`;
  const publicPath = '/js/';

  const webpackConfig = {
    context: src,
    plugins: [],
    resolve: {
      extensions: ['', '.js', '.jsx']
    },

    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        },
        {
          test: /\.svg$/,
          loader: 'svg-inline',
          exclude: /node_modules/
        }
      ]
    }
  };

  if (!env.test) {
    webpackConfig.entry = {
      application: ['./index.js'],
      vendor: loadDependencies(excludeFromListed, includeNotListed)
    };

    webpackConfig.output = {
      path: dest,
      filename: env.production ? '[name].min.js' : '[name].js',
      publicPath: publicPath,
      jsonpFunction: 'appLoader'
    };

    webpackConfig.plugins.push(
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        filename: env.production ? '[name].min.js' : '[name].js'
      }),

      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify(
            env.production ? 'production' : 'development'
          )
        }
      })
    );
  }

  if (env.development) {
    webpackConfig.entry.application.push('./mock-data.js');
    webpackConfig.devtool = 'source-map';
    webpack.debug = true;
  }

  if (env.production) {
    webpackConfig.plugins.push(
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin(uglify),
      new webpack.NoErrorsPlugin()
    );
  }

  return webpackConfig;
}
