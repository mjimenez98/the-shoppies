import React from 'react';
import {
  Col, Container, Form, Row,
} from 'bootstrap-4-react';

class Movie {
  title: string;
  year: string;

  constructor(title: string, year: string) {
    this.title = title;
    this.year = year;
  }
}

interface States {
  movieResults: Array<Movie>,
  searchValue: string
}

class Search extends React.Component<{}, States> {
  constructor(props: any) {
    super(props);
    this.state = {
      movieResults: [],
      searchValue: ''
    };

    this.getMoviesFromOMDb = this.getMoviesFromOMDb.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  private async getMoviesFromOMDb(search: string) {
    try {
      const apiKey = '';
      const type = 'movie';
      const s = search;

      await fetch('http://www.omdbapi.com/?' +
        'apikey=' + apiKey +
        '&type=' + type +
        '&s=' + s)
      .then(response => response.json())
      .then(data => this.updateMovies(data));
    } catch (error) {
      console.error(error);
    }
  };

  private async updateMovies(res: any) {
    if(res['Response'] === 'True') {
      const resMovies = res['Search'];
      const movies = resMovies.map((x: { [x: string]: string; }) => {
        return new Movie(x['Title'], x['Year']);
      });

      this.setState({ movieResults: movies})
    } else {
      this.setState({ movieResults: [] })
    }
  }

  private handleChange(event: any) {
    this.setState({ searchValue: event.target.value });
    this.getMoviesFromOMDb(event.target.value);
  }

  render() {
    return (
      <Container mt="5">
        <Row justifyContent="center">
          <Col col="md-6">
            <Form>
              <Form.Group>
                <label htmlFor="Search">Search for your favorite movies to nominate</label>
                <Form.Input
                  type="text"
                  id="movie"
                  placeholder="ex: Tenet"
                  value={this.state.searchValue}
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col>
          <div>
            {this.state.movieResults.map((movie, index) => (
              <li key={index}>
                {movie.title + ' - ' + movie.year}
              </li>
            ))}
          </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Search;
