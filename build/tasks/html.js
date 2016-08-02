import gulp, { task } from 'gulp';
import render from 'gulp-ejs';
import { env } from '../config/index';
import browserSync from 'browser-sync';
import errorHandler from '../utils/error-handler';
import { src, dest } from '../config/html';

task('html', function () {
  return gulp.src(src)
    .pipe(render({ min: env.production ? '.min' : '' }))
    .on('error', errorHandler.bind(this))
    .pipe(gulp.dest(dest))
    .pipe(browserSync.reload({ stream: true }));
});
