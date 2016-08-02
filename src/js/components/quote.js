import React, { Component } from 'react';

class Quote extends Component {
  static displayName = 'Quote';

  render() {
    const { quote } = this.props;

    return (
      <h4>{quote}</h4>
    );
  }
}

export default Quote;
