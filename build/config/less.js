import { sourceAssets, publicAssets } from './index';

export default {
  entries: `${sourceAssets}/less/application.less`,
  src: `${sourceAssets}/less/**/*.less`,
  dest: `${publicAssets}/css`,

  minifyCSS: {
    keepBreaks: false,
    keepSpecialComments: false
  }
}
