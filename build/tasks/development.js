import { task } from 'gulp';
import { default as sequence } from 'gulp-sequence';

task('development', (callback) => {
  sequence('clean', ['fonts', 'images', 'svg'], ['less', 'webpack', 'html'], 'lint', callback);
});
