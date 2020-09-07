import React from 'react';
import {
  Col, Button, Row,
} from 'bootstrap-4-react';

import { Movie } from '../SearchBar';

interface Props {
  movie: Movie,
  addNominee(movie: Movie): void,
}

interface States {
  nominated: Movie,
}

class SearchResultsMovie extends React.Component<Props, States> {
  constructor(props: Props) {
    super(props);

    this.addNominee = this.addNominee.bind(this);
  }

  private addNominee(): void {
    const { movie, addNominee } = this.props;
    addNominee(movie);
  }

  render(): React.ReactNode {
    const { movie } = this.props;
    return (
      <Row my="2" alignItems="center">
        <Col>
          <div key={movie.key}>
            { movie.key }
          </div>
        </Col>
        <Col>
          <div>
            <Button
              light
              sm
              disabled={movie.nominated}
              onClick={this.addNominee}
            >
              Nominate
            </Button>
          </div>
        </Col>
      </Row>
    );
  }
}

export default SearchResultsMovie;
