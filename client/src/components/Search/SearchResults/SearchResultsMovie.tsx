import React from 'react';
import {
  BDiv, Col, Button, Row, Container,
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
      <Container>
        <Row my="3" justifyContent="center">
          <Col col="8">
            <BDiv key={movie.id}>
              { `${movie.title} (${movie.year})` }
            </BDiv>
          </Col>
          <Col col="4" display="flex" justifyContent="center" alignSelf="center">
            <BDiv>
              <Button
                style={{ backgroundColor: '#0D5946', color: '#FFFFFF' }}
                sm
                disabled={movie.nominated}
                onClick={this.addNominee}
              >
                Nominate
              </Button>
            </BDiv>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SearchResultsMovie;
