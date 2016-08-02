import { task, start } from 'gulp';
import { src as htmlSrc } from '../config/html';
import { src as lessSrc } from '../config/less';
import { default as watch } from 'gulp-watch';

task('watch', ['server', 'browser-sync'], () => {
  watch(lessSrc, () => start('less'));
  watch(htmlSrc, () => start('html'));
});
