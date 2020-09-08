import React from 'react';
import {
  BDiv, Col, Container, Button, Row,
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
      <Container>
        <Row my="3" justifyContent="center">
          <Col col="8">
            <BDiv>
              { `${movie.title} (${movie.year})` }
            </BDiv>
          </Col>
          <Col col="4" display="flex" justifyContent="center" alignSelf="center">
            <BDiv>
              <Button
                style={{ backgroundColor: '#0D5946', color: '#FFFFFF' }}
                sm
                onClick={this.removeNominee}
              >
                Remove
              </Button>
            </BDiv>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Nominee;
