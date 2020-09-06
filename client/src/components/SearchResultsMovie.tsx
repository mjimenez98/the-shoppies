import React from 'react';
import {
  Col, Button, Row,
} from 'bootstrap-4-react';

interface Props {
  title: string,
}

interface States {
  nominated: string,
}

class SearchResultsMovie extends React.Component<Props, States> {
  constructor(props: Props) {
    super(props);
    this.state = {
      nominated: '',
    };
  }

  render() {
    const { title } = this.props;
    const { nominated } = this.state;
    return (
      <Row my="2" alignItems="center">
        <Col>
          <div>
            { title }
          </div>
        </Col>
        <Col>
          <div>
            <Button light sm>Nominate</Button>
          </div>
        </Col>
      <p>{ nominated }</p>
    </Row>
    );
  }
}

export default SearchResultsMovie;
