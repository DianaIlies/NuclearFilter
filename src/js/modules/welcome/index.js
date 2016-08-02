import quotes from './stores/quotes';
import BaseModule from '../../base-module';
import * as getters from './getters';
import * as actions from './actions';

class Welcome extends BaseModule {
  static displayName = 'Welcome';

  constructor() {
    super({ actions, getters });
  }

  register(context) {
    context.registerStores({ quotes });
  }
}

export default new Welcome();
