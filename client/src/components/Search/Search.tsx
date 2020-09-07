import React from 'react';
import { Col, Container, Row } from 'bootstrap-4-react';

import Banner from './Banner';
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
    this.isNominated = this.isNominated.bind(this);
    this.isNominated = this.isNominated.bind(this);
  }

  private getMovies(movieResults: Array<Movie>): void {
    this.setState({ movieResults });
  }

  private addNominee(movie: Movie): void {
    const { movieResults, nominees } = this.state;
    const isNominated = this.isNominated(movie.key);
    const isInMovieResults = this.isInMovieResults(movie.key);

    if (nominees.length < 5 && isNominated === -1) {
      const newNominees = nominees;

      movieResults[isInMovieResults].nominated = true;
      newNominees.push(movie);

      this.setState({ nominees: newNominees });
    }
  }

  private removeNominee(movie: Movie): void {
    const { movieResults, nominees } = this.state;
    const isNominated = this.isNominated(movie.key);
    const isInMovieResults = this.isInMovieResults(movie.key);

    if (isNominated !== -1) {
      let newNominees = nominees;
      const index = newNominees.indexOf(movie);

      if (isInMovieResults !== -1) {
        movieResults[isInMovieResults].nominated = false;
      }

      if (index === 0 && newNominees.length === 1) newNominees = [];
      else newNominees.splice(newNominees.indexOf(movie), 1);

      this.setState({ nominees: newNominees });
    }
  }

  /*
   * Queries the nominees list to see if a passed movie key is in there
   * Returns the index of the movie in the nominees list if found, otherwise returns -1
   */
  private isNominated(key: string): number {
    const { nominees } = this.state;
    let nominatedIndex = -1;

    nominees.forEach((movie, index) => {
      if (key.localeCompare(movie.key) === 0) {
        nominatedIndex = index;
      }
    });

    return nominatedIndex;
  }

  private isInMovieResults(key: string): number {
    const { movieResults } = this.state;
    let resultsIndex = -1;

    movieResults.forEach((movie, index) => {
      if (key.localeCompare(movie.key) === 0) {
        resultsIndex = index;
      }
    });

    return resultsIndex;
  }

  render(): React.ReactNode {
    const { movieResults, nominees } = this.state;
    return (
      <Container fluid>
        { (nominees.length === 5)
          ? (
            <Container>
              <Row justifyContent="center">
                <Banner />
              </Row>
            </Container>
          )
          : (null)}
        <Container fluid my="5">
          <Row justifyContent="center">
            <Col col="md-6">
              <SearchBar
                nominees={nominees}
                isNominated={this.isNominated}
                isInMovieResults={this.isInMovieResults}
                sendMovies={this.getMovies}
              />
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <Row>
            <Col col="md-6">
              <SearchResults movieResults={movieResults} addNominee={this.addNominee} />
            </Col>
            <Col col="md-6">
              <Nominations nominees={nominees} removeNominee={this.removeNominee} />
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}

export default Search;
