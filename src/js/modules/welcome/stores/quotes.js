import { Store, toImmutable } from 'nuclear-js';

class QuotesStore extends Store {
  getInitialState() {
    return toImmutable([]);
  }

  initialize() {}
}

const INSTANCE = new QuotesStore();

export default INSTANCE;
