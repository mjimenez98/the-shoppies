import React, { FunctionComponent } from 'react';
import { Col, Container, Row } from 'bootstrap-4-react';

import SearchBar from './SearchBar';

const Body: FunctionComponent = () => (
  <Container mt="5">
    <Row justifyContent="center">
      <Col col="md-6">
        <SearchBar />
      </Col>
    </Row>
  </Container>
);

export default Body;
