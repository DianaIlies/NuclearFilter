import context from '../../application-context';

import {
  LOGIN,
  LOGOUT
} from './action-types';

export function login() {
  context.dispatch(LOGIN, { token: 'placeholder_value' });
}

export function logout() {
  context.dispatch(LOGOUT, {});
}
