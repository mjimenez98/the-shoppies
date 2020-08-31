import React, { Component } from 'react';
import { Navbar } from 'bootstrap-4-react';

export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar expand="lg" style={{backgroundColor: '#083D30', color: '#FFFFFF'}} mb="3">
          <Navbar.Brand>
            The Shoppies
          </Navbar.Brand>
        </Navbar>
      </React.Fragment>
    )
  }
}
