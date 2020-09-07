import React from 'react';
import {
  Col, Button, Row,
} from 'bootstrap-4-react';
import { Movie } from '../SearchBar';

interface Props {
  movie: Movie,
  removeNominee(movie: Movie): void,
}

class Nominee extends React.Component<Props, unknown> {
  constructor(props: Props) {
    super(props);

    this.removeNominee = this.removeNominee.bind(this);
  }

  private removeNominee() {
    const { movie, removeNominee } = this.props;
    removeNominee(movie);
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
            <Button light sm onClick={this.removeNominee}>Remove</Button>
          </div>
        </Col>
      </Row>
    );
  }
}

export default Nominee;
