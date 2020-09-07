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
    this.isNominated = this.isNominated.bind(this);
  }

  private getMovies(movieResults: Array<Movie>): void {
    this.setState({ movieResults });
  }

  private addNominee(movie: Movie): void {
    const { movieResults, nominees } = this.state;
    const newNominees = nominees;

    if (!this.isNominated(movie.key)) {
      movie.nominated = true;
      movieResults[movieResults.indexOf(movie)].nominated = true;
      newNominees.push(movie);

      this.setState({ nominees: newNominees })
    }
  }

  private removeNominee(movie: Movie): void {
    const { movieResults, nominees } = this.state;
    let newNominees = nominees;

    if (this.isNominated(movie.key)) {
      movie.nominated = false;

      if (movieResults.indexOf(movie) > -1)
        movieResults[movieResults.indexOf(movie)].nominated = false;

      const index = newNominees.indexOf(movie);

      if (index === 0 && newNominees.length === 1)
        newNominees = []
      else
        newNominees.splice(newNominees.indexOf(movie), 1);

      this.setState({ nominees: newNominees })
    }
  }

  private isNominated(key: string): boolean {
    const { nominees } = this.state;
    let nominated = false;

    nominees.forEach(element => {
      if (key.localeCompare(element.key) === 0) {
        nominated = true;
        return
      }
    });

    return nominated;
  }

  render(): React.ReactNode {
    const { movieResults, nominees } = this.state;
    return (
      <Container fluid>
        <Container fluid my="5">
          <Row justifyContent="center">
            <Col col="md-6">
              <SearchBar
                nominees={nominees}
                isNominated={this.isNominated}
                sendMovies={this.getMovies} />
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
