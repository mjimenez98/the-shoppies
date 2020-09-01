import React from 'react';
import {
  Col, Container, Form, Row,
} from 'bootstrap-4-react';

interface States {
  searchValue: string
}

class Search extends React.Component<{}, States> {
  constructor(props: any) {
    super(props);
    this.state = { searchValue: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  private handleChange(event: any) {
    this.setState({ searchValue: event.target.value });
  }

  render() {
    return (
      <Container mt="5">
        <Row justifyContent="center">
          <Col col="md-6">
            <Form>
              <Form.Group>
                <label htmlFor="Search">Search for your favorite movies to nominate</label>
                <Form.Input
                  type="text"
                  id="movie"
                  placeholder="ex: Tenet"
                  value={this.state.searchValue}
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Search;
