import Router, {
  HistoryLocation,
  HashLocation,
  ScrollToTopBehavior
} from 'react-router';

import Routes from './routes';

export default Router.create({
  location: global.history.pushState ? HistoryLocation : HashLocation,
  scrollBehavior: ScrollToTopBehavior,
  routes: Routes
});
