import gulpif from 'gulp-if';
import eslint from 'gulp-eslint';
import gulp, { task } from 'gulp';
import { env, javascripts } from '../config/index';

task('lint', () => {
  return gulp.src(javascripts.src)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(gulpif(env.production, eslint.failOnError()));
});
