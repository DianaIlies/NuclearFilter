import React, { Component } from 'react';
import { Link } from 'react-router';

class Branding extends Component {
  static displayName = 'Branding';

  render() {
    return (
      <Link className='navbar-brand' to='dashboard'>iMM</Link>
    );
  }
}

export default Branding;
