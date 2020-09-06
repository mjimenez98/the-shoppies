import React from 'react';
import {
  Col, Button, Row,
} from 'bootstrap-4-react';
import { Movie } from '../SearchBar';

interface Props {
  movie: Movie,
}

class Nominee extends React.Component<Props, unknown> {
  private removeNominee() {

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
