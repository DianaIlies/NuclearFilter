import { env } from 'gulp-util';

const CURRENT = './';
const STATIC = './static';
const SOURCES = './src';

export default {
  env,
  publicDirectory: STATIC,
  sourceDirectory: SOURCES,
  publicAssets: STATIC,
  sourceAssets: SOURCES,

  production: {
    basename: 'application',
    suffix: '.min',
    dirname: CURRENT
  },

  javascripts: {
    src: `${SOURCES}/js/**/*.{js,jsx}`
  },

  // List of modules to exclude or include in the vendor bundle
  includeNotListed: ['react/addons'],
  excludeFromListed: ['bootstrap']
}
