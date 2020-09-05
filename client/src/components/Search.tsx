import React from 'react';
import { Col, Container, Row } from 'bootstrap-4-react';

import { Movie, SearchBar } from './SearchBar';
import SearchResults from './SearchResults';

interface States {
  movieResults: Array<Movie>,
}

class Search extends React.Component<unknown, States> {
  constructor(props: unknown) {
    super(props);
    this.state = {
      movieResults: [],
    };
  }

  getMovies(movieResults: Array<Movie>): void {
    this.setState({ movieResults });
  }

  render(): React.ReactNode {
    const { movieResults } = this.state;
    return (
      <Container mt="5">
        <Row justifyContent="center">
          <Col col="md-6">
            <SearchBar sendMovies={this.getMovies} />
          </Col>
        </Row>
        <Row justifyContent="center">
          <Col col="md-6">
            <SearchResults movieResults={movieResults} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Search;
