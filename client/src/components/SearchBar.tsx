import React from 'react';
import {
  Form,
} from 'bootstrap-4-react';

export interface Movie {
  key: string,
  title: string,
  year: string,
}

export interface OMDbMovie {
  Title: string,
  Year: string,
}

interface Props {
  sendMovies(movieResults: Array<Movie>): void,
}

interface States {
  searchValue: string,
}

export class SearchBar extends React.Component<Props, States> {
  constructor(props: Props) {
    super(props);
    this.state = {
      searchValue: '',
    };

    this.getMovies = this.getMovies.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // Get movie results from OMDb API by calling the backend
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

  // Parse movie results and send them to Parent component
  private async updateMovies(res: { Response: string; Search: Array<OMDbMovie>; }) {
    if (res.Response === 'True') {
      const { sendMovies } = this.props;
      const resMovies = res.Search;

      const movies = resMovies.map((movie) => {
        const newMovie: Movie = {
          key: `${movie.Title} (${movie.Year})`,
          title: movie.Title,
          year: movie.Year,
        };

        return newMovie;
      });

      sendMovies(movies);
    }
  }

  private handleChange(event: { target: { value: string; }; }) {
    this.setState({ searchValue: event.target.value });
    this.getMovies(event.target.value);
  }

  render(): React.ReactNode {
    const { searchValue } = this.state;
    return (
      <div>
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
      </div>
    );
  }
}
