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
    this.addNominee = this.addNominee.bind(this);
    this.removeNominee = this.removeNominee.bind(this);
  }

  getMovies(movieResults: Array<Movie>): void {
    this.setState({ movieResults });
  }

  addNominee(movie: Movie): void {
    const { nominees } = this.state;
    const newNominees = nominees;

    if (nominees.includes(movie)) {
      console.error('An already nominated movie has been received again for a nomination');
    } else {
      newNominees.push(movie);
    }

    this.setState({ nominees: newNominees })
  }

  removeNominee(movie: Movie): void {
    const { nominees } = this.state;
    let newNominees = nominees;

    if (nominees.includes(movie)) {
      const index = newNominees.indexOf(movie);
      (index === 0) ? newNominees = [] : newNominees.splice(1, index);
    } else {
      console.error('A non-nominated movie has been selected for removal');
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
              <SearchResults movieResults={movieResults} addNominee={this.addNominee} />
            </Col>
            <Col col="md-6">
              <Nominations nominees={nominees} removeNominee={this.removeNominee}/>
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}

export default Search;
