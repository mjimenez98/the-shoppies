import React, { FunctionComponent } from 'react';
import { Navbar } from 'bootstrap-4-react';

const Header: FunctionComponent = () => (
  <>
    <Navbar expand="lg" style={{ backgroundColor: '#083D30', color: '#FFFFFF' }} mb="3">
      <Navbar.Brand>
        The Shoppies
      </Navbar.Brand>
    </Navbar>
  </>
);

export default Header;
