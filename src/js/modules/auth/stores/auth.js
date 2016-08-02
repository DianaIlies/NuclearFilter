import { Store, toImmutable } from 'nuclear-js';

import {
  LOGIN,
  LOGOUT
} from '../action-types';

class AuthStore extends Store {
  getInitialState() {
    return toImmutable({
      token: null
    });
  }

  initialize() {
    this.on(LOGIN, login);
    this.on(LOGOUT, logout);
  }
}

const INSTANCE = new AuthStore();

export default INSTANCE;

function login(state, payload) {
  const { token } = payload;

  if (token) {
    return toImmutable({ token });
  }

  return state;
}

function logout(state) {
  return INSTANCE.getInitialState();
}
