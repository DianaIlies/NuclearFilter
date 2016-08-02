import omit from 'lodash/object/omit';

class BaseModule {
  constructor({ actions, getters }) {
    this.actions = omit(actions, '__esModule');
    this.getters = omit(getters, '__esModule');
  }

  register(context) {
    // sub-classes should extend this method
  }
}

export default BaseModule;
