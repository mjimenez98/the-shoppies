import React from 'react';
import {
  Col, Button, Row,
} from 'bootstrap-4-react';

import { Movie } from './SearchBar';

interface Props {
  movie: Movie,
  sendNominee(movie: Movie): void,
}

interface States {
  nominated: Movie,
}

class SearchResultsMovie extends React.Component<Props, States> {
  constructor(props: Props) {
    super(props);

    this.sendNominee = this.sendNominee.bind(this);
  }

  private sendNominee(): void {
    const { movie, sendNominee } = this.props;
    sendNominee(movie);
  }

  render(): React.ReactNode {
    const { movie } = this.props;
    return (
      <Row my="2" alignItems="center">
        <Col>
          <div>
            { movie.key }
          </div>
        </Col>
        <Col>
          <div>
            <Button light sm onClick={this.sendNominee}>Nominate</Button>
          </div>
        </Col>
      </Row>
    );
  }
}

export default SearchResultsMovie;
