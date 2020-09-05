import React from 'react';
import { Col, Container, Row } from 'bootstrap-4-react';

import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

export interface Movie {
  title: string,
  year: string,
}

export interface OMDbMovie {
  Title: string,
  Year: string,
}

interface States {
  movieResults: Array<Movie>,
}

export class Search extends React.Component<unknown, States> {
  constructor(props: unknown) {
    super(props);
    this.state = {
      movieResults: []
    }
  }

  getMovies = (movieResults: Array<Movie>) => {
    this.setState({movieResults: movieResults});
  }

  render(): React.ReactNode {
    return (
      <Container mt="5">
        <Row justifyContent="center">
          <Col col="md-6">
            <SearchBar sendMovies={this.getMovies.bind(this)}/>
          </Col>
        </Row>
        <Row justifyContent="center">
          <Col col ="md-6">
            <SearchResults movieResults={this.state.movieResults}/>
          </Col>
        </Row>
      </Container>
    );
  }
}
