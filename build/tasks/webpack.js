import { task } from 'gulp';
import webpack from 'webpack';
import browserSync from 'browser-sync';
import { env } from '../config/index';
import logger from '../utils/logger';
import generateWebpackConfig from '../config/webpack';

task('webpack', (callback) => {
  let done = false;

  if (!env.production) {
    webpack(generateWebpackConfig()).watch(200, (err, stats) => {
      logger(err, stats);
      browserSync.reload();

      if (!done) {
        done = true;
        callback();
      }
    });

  } else {
    webpack(generateWebpackConfig(), (err, stats) => {
      logger(err, stats);
      callback();
    });
  }
});
