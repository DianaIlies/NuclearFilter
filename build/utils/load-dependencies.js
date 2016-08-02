import pull from 'lodash/array/pull';
import manifest from '../../package.json';

export default function loadDependencies(exclude, include) {
  let dependencies = Object.keys(manifest.dependencies || {});

  if (!dependencies || !dependencies.length) {
    return [];
  }

  exclude.map((item) => dependencies = pull(dependencies, item));
  include.map((item) => dependencies.push(item));

  return dependencies.sort();
}
