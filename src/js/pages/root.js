import React, { Component } from 'react';
import { RouteHandler } from 'react-router';

class Root extends Component {
  static displayName = 'Root';

  render() {
    return (
      <RouteHandler/>
    );
  }
}

export default Root;
