import React from 'react';
import {
  Col, Button, Row,
} from 'bootstrap-4-react';

import { Movie } from './SearchBar';

interface Props {
  movieResults: Array<Movie>,
}

interface States {
  movieNominated: string;
}

class SearchResults extends React.Component<Props, States> {
  constructor(props: Props) {
    super(props);
    this.state = {
      movieNominated: '',
    };
  }

  render(): React.ReactNode {
    const { movieResults } = this.props;
    const { movieNominated } = this.state;
    return (
      <div>
        <div>
          <h5>Search Results</h5>
        </div>
        <div>
          {movieResults.map((movie: Movie) => (
            <Row my="2" key={`row ${movie.title} (${movie.year})`}>
              <Col col="9" key={`col1 ${movie.title} (${movie.year})`}>
                <div key={`${movie.title} (${movie.year})`}>
                  {`${movie.title} (${movie.year})`}
                </div>
              </Col>
              <Col col="3" key={`col2 ${movie.title} (${movie.year})`}>
                <div key={`div2 ${movie.title} (${movie.year})`}>
                  <Button light sm key={`button ${movie.title} (${movie.year})`}>Nominate</Button>
                </div>
              </Col>
            </Row>
          ))}
          <p>{movieNominated}</p>
        </div>
      </div>
    );
  }
}

export default SearchResults;
