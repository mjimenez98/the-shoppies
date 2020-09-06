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

    this.getMovies = this.getMovies.bind(this);
  }

  getMovies(movieResults: Array<Movie>): void {
    this.setState({ movieResults });
  }

  render(): React.ReactNode {
    const { movieResults } = this.state;
    return (
      <Container>
        <Container my="5">
          <Row justifyContent="center">
            <Col col="md-6">
              <SearchBar sendMovies={this.getMovies} />
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col col="md-6">
              <SearchResults movieResults={movieResults} />
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}

export default Search;
