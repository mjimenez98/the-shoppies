import React from 'react';
import {
  Col, Container, Form, Row,
} from 'bootstrap-4-react';

interface Movie {
  title: string,
  year: string,
}

interface OMDbMovie {
  Title: string,
  Year: string,
}

interface States {
  movieResults: Array<Movie>,
  searchValue: string,
}

class Search extends React.Component<unknown, States> {
  constructor(props: unknown) {
    super(props);
    this.state = {
      movieResults: [],
      searchValue: '',
    };

    this.getMovies = this.getMovies.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  private async getMovies(search: string) {
    let res;

    try {
      res = await fetch(`/api/getMovies?search=${search}`)
        .then((response) => response.json());
    } catch (error) {
      console.log(error);
    }

    this.updateMovies(res);
  }

  private async updateMovies(res: { Response: string; Search: Array<OMDbMovie>; }) {
    if (res.Response === 'True') {
      const resMovies = res.Search;
      const movies = resMovies.map((movie) => {
        const newMovie: Movie = {
          title: movie.Title,
          year: movie.Year,
        };

        return newMovie;
      });

      this.setState({ movieResults: movies });
    } else {
      this.setState({ movieResults: [] });
    }
  }

  private handleChange(event: { target: { value: string; }; }) {
    this.setState({ searchValue: event.target.value });
    this.getMovies(event.target.value);
  }

  render(): React.ReactNode {
    const { searchValue, movieResults } = this.state;
    return (
      <Container mt="5">
        <Row justifyContent="center">
          <Col col="md-6">
            <Form>
              <Form.Group>
                <label htmlFor="search">Search for your favorite movies to nominate</label>
                <Form.Input
                  type="text"
                  id="search"
                  placeholder="ex: Tenet"
                  value={searchValue}
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col>
            <div>
              {movieResults.map((movie) => (
                <li key={`${movie.title} - ${movie.year}`}>
                  {`${movie.title} - ${movie.year}`}
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
