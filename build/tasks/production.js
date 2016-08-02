import { task } from 'gulp';
import { default as sequence } from 'gulp-sequence';

task('production', (callback) => {
  sequence('clean', 'lint', ['fonts', 'images', 'svg'], ['less', 'webpack', 'html'], callback);
});
