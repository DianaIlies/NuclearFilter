import React, { Component } from 'react';
import { modules, connector } from '../application-context';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import Branding from './branding';

const { auth } = modules;

@connector({
  token: auth.getters.userToken
})
class GlobalNavbar extends Component {
  static displayName = 'GlobalNavbar';

  handleLogin(ev) {
    ev.preventDefault();
    auth.actions.login();
  }

  handleLogout(ev) {
    ev.preventDefault();
    auth.actions.logout();
  }

  render() {
    const { token } = this.props;

    return (
      <Navbar brand={<Branding/>} fluid={true} staticTop={true}>
          {
            token ? (
              <Nav right={true} eventKey={0}>
                <NavDropdown eventKey={3} title='Account' id='nav-account'>
                  <MenuItem eventKey='1'>Settings</MenuItem>
                  <MenuItem eventKey='2'>Mailings</MenuItem>
                  <MenuItem eventKey='3'>Admin</MenuItem>
                  <MenuItem divider />
                  <MenuItem
                    eventKey='4'
                    onSelect={this.handleLogout.bind(this)}
                  >
                    Logout
                  </MenuItem>
                </NavDropdown>
              </Nav>
            ) : (
              <Nav right={true} eventKey={0}>
                <NavItem
                  href='javascript:;'
                  eventKey={4}
                  onClick={this.handleLogin.bind(this)}
                >
                  Login
                </NavItem>
              </Nav>
            )
          }

      </Navbar>
    );
  }
}

export default GlobalNavbar;
