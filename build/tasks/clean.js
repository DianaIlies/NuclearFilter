import del from 'del';
import { task } from 'gulp';
import { log } from 'gulp-util';
import { dest } from '../config/html';
import { publicAssets } from '../config/index';

task('clean', (callback) => {
  del([publicAssets, dest]).then(() => {
    log('Successfully cleaned static files...');
    callback();
  });
});
