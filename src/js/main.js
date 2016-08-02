import React from 'react';
import ErrorHandler from './error-handler';
import Router from './router';
import context from './application-context';

class Main {
  initialize(spec) {
    const mountNode = document.getElementById('root');
    const { provider } = context;

    ErrorHandler.fatal(
      (mountNode === null),
      `Main#initialize(): mount node doesn't exist`
    );

    if (spec && spec.stores) {
      context.inject(spec.stores);
    }

    Router.run(Handler => {
      Handler = provider(Handler);

      React.render((
        <Handler reactor={context}/>
      ), mountNode);
    });

    if (context.debug) {
      this.api = context;
    }
  }
}

export default Main;
