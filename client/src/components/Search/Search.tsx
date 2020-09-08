import React from 'react';
import {
  BSpan, Col, Container, Row,
} from 'bootstrap-4-react';

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
    this.keyIndexInNominees = this.keyIndexInNominees.bind(this);
    this.keyIndexInNominees = this.keyIndexInNominees.bind(this);
  }

  private getMovies(movieResults: Array<Movie>): void {
    this.setState({ movieResults });
  }

  private addNominee(movie: Movie): void {
    const { movieResults, nominees } = this.state;
    const isNominated = this.keyIndexInNominees(movie.id);
    const keyIndexInMovieResults = this.keyIndexInMovieResults(movie.id);

    if (nominees.length < 5 && isNominated === -1) {
      const newNominees = nominees;

      movieResults[keyIndexInMovieResults].nominated = true;
      newNominees.push(movie);

      this.setState({ nominees: newNominees });
    }
  }

  private removeNominee(movie: Movie): void {
    const { movieResults, nominees } = this.state;
    const isNominated = this.keyIndexInNominees(movie.id);
    const keyIndexInMovieResults = this.keyIndexInMovieResults(movie.id);

    if (isNominated !== -1) {
      let newNominees = nominees;
      const index = newNominees.indexOf(movie);

      if (keyIndexInMovieResults !== -1) {
        movieResults[keyIndexInMovieResults].nominated = false;
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
  private keyIndexInNominees(key: string): number {
    const { nominees } = this.state;
    let nominatedIndex = -1;

    nominees.forEach((movie, index) => {
      if (key.localeCompare(movie.id) === 0) {
        nominatedIndex = index;
      }
    });

    return nominatedIndex;
  }

  /*
   * Queries the movie results list to see if a passed movie key is in there
   * Returns the index of the movie in the nominees list if found, otherwise returns -1
   */
  private keyIndexInMovieResults(key: string): number {
    const { movieResults } = this.state;
    let resultsIndex = -1;

    movieResults.forEach((movie, index) => {
      if (key.localeCompare(movie.id) === 0) {
        resultsIndex = index;
      }
    });

    return resultsIndex;
  }

  render(): React.ReactNode {
    const { movieResults, nominees } = this.state;
    const boxStyle = {
      display: 'block',
      padding: '2rem',
      backgroundColor: '#F6F6F7',
    };
    return (
      <Container mb="5">
        <Container mt="5" mb="5">
          <BSpan style={boxStyle} border shadow="sm">
            <Row justifyContent="center">
              <Col col="md-6">
                <SearchBar
                  nominees={nominees}
                  isNominated={this.keyIndexInNominees}
                  keyIndexInMovieResults={this.keyIndexInMovieResults}
                  sendMovies={this.getMovies}
                />
              </Col>
            </Row>
          </BSpan>
        </Container>
        {(nominees.length === 5)
          ? (
            <Container>
              <Row justifyContent="center">
                <Col>
                  <Banner />
                </Col>
              </Row>
            </Container>
          )
          : (null)}
        <Container>
          <Row>
            <Col col="md-6" mb="5">
              <BSpan style={boxStyle} border shadow="sm">
                <SearchResults movieResults={movieResults} addNominee={this.addNominee} />
              </BSpan>
            </Col>
            <Col col="md-6">
              <BSpan style={boxStyle} border shadow="sm">
                <Nominations nominees={nominees} removeNominee={this.removeNominee} />
              </BSpan>
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}

export default Search;
