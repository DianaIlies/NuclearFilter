import gulp, { task } from 'gulp';
import less from 'gulp-less';
import gulpif from 'gulp-if';
import rename from 'gulp-rename';
import minify from 'gulp-minify-css';
import { env, production } from '../config/index';
import sourcemaps from 'gulp-sourcemaps';
import browserSync from 'browser-sync';
import errorHandler from '../utils/error-handler';
import { entries, dest, minifyCSS } from '../config/less';

task('less', function () {
  if (env.development) {
    delete production.suffix;
  }

  return gulp.src(entries)
    .pipe(gulpif(!env.production, sourcemaps.init()))
    .pipe(less())
    .on('error', errorHandler.bind(this))
    .pipe(gulpif(!env.production, sourcemaps.write()))
    .pipe(gulpif(env.production, minify(minifyCSS)))
    .pipe(rename(production))
    .pipe(gulp.dest(dest))
    .pipe(browserSync.reload({ stream: true }));
});
