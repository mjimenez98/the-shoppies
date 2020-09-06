import React from 'react';

import { Movie } from './SearchBar';
import SearchResultsMovie from './SearchResultsMovie';

interface Props {
  movieResults: Array<Movie>,
}

interface States {
  movieNominated: string;
}

class SearchResults extends React.Component<Props, States> {
  constructor(props: Props) {
    super(props);
    this.state = {
      movieNominated: '',
    };
  }

  render(): React.ReactNode {
    const { movieResults } = this.props;
    const { movieNominated } = this.state;
    return (
      <div>
        <div>
          <h5>Search Results</h5>
        </div>
        <div>
          {movieResults.map((movie: Movie) => (
            <SearchResultsMovie
              key={`${movie.title} (${movie.year})`}
              title={`${movie.title} (${movie.year})`}
            />
          ))}
          <p>{movieNominated}</p>
        </div>
      </div>
    );
  }
}

export default SearchResults;
