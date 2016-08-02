import context from '../../application-context';
import { GET_QUOTES } from './action-types';

export function getQuotes() {
  context.dispatch(GET_QUOTES, {});
}
