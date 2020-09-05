import React from 'react';
import { Col, Container, Row } from 'bootstrap-4-react';

import SearchBar from './SearchBar';

export interface Movie {
  title: string,
  year: string,
}

export interface OMDbMovie {
  Title: string,
  Year: string,
}

interface States {
  movies: Array<Movie>,
}

export class Body extends React.Component<unknown, States> {
  constructor(props: unknown) {
    super(props);
    this.state = {
      movies: []
    }
  }

  getMovies = (movieResults: Array<Movie>) => {
    this.setState({movies: movieResults});
  }

  render(): React.ReactNode {
    return (
      <Container mt="5">
        <Row justifyContent="center">
          <Col col="md-6">
            <SearchBar sendMovies={this.getMovies.bind(this)}/>
          </Col>
        </Row>
        <Row>
          <div>
            {this.state.movies.map((movie: Movie) => (
              <li key={`${movie.title} - ${movie.year}`}>
                {`${movie.title} - ${movie.year}`}
              </li>
            ))}
          </div>
        </Row>
      </Container>
    );
  }
}
