import React, { FunctionComponent } from 'react';
import { BImg, Navbar } from 'bootstrap-4-react';

const Header: FunctionComponent = () => (
  <>
    <Navbar expand="lg" style={{ backgroundColor: '#083D30', color: '#FFFFFF' }} mb="3">
      <Navbar.Brand>
        <BImg
          src="https://user-images.githubusercontent.com/10281272/92446655-219aed80-f184-11ea-9583-d070503af746.png"
          width="30"
          height="30"
          display="inline-block"
          align="top"
          mr="1"
        />
        The Shoppies
      </Navbar.Brand>
    </Navbar>
  </>
);

export default Header;
