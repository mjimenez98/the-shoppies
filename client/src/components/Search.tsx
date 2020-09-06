import React from 'react';
import { Col, Container, Row } from 'bootstrap-4-react';

import { Movie, SearchBar } from './SearchBar';
import SearchResults from './SearchResults/SearchResults';
import Nominations from './Nominations/Nominations';

interface States {
  movieResults: Array<Movie>,
  nominees: Array<Movie>,
}

class Search extends React.Component<unknown, States> {
  constructor(props: unknown) {
    super(props);
    this.state = {
      movieResults: [],
      nominees: [],
    };

    this.getMovies = this.getMovies.bind(this);
    this.getNominee = this.getNominee.bind(this);
  }

  getMovies(movieResults: Array<Movie>): void {
    this.setState({ movieResults });
  }

  getNominee(movie: Movie): void {
    const { nominees } = this.state;
    const newNominees = nominees;

    if (nominees.includes(movie)) {
      console.error('An already nominated movie has been received again for a nomination');
    } else {
      newNominees.push(movie);
    }

    this.setState({ nominees: newNominees })
  }

  render(): React.ReactNode {
    const { movieResults, nominees } = this.state;
    return (
      <Container fluid>
        <Container fluid my="5">
          <Row justifyContent="center">
            <Col col="md-6">
              <SearchBar sendMovies={this.getMovies} />
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <Row>
            <Col col="md-6">
              {/* <SearchResults movieResults={movieResults} /> */}
              <SearchResults movieResults={movieResults} sendNominee={this.getNominee} />
            </Col>
            <Col col="md-6">
              <Nominations nominees={nominees} />
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}

export default Search;
