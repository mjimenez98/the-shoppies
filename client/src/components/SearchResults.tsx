import React from 'react';

import { Movie } from './SearchBar';

interface Props {
  movieResults: Array<Movie>,
}

class SearchResults extends React.Component<Props, unknown> {
  render(): React.ReactNode {
    const { movieResults } = this.props;
    return (
      <div>
        {movieResults.map((movie: Movie) => (
          <li key={`${movie.title} (${movie.year})`}>
            {`${movie.title} (${movie.year})`}
          </li>
        ))}
      </div>
    );
  }
}

export default SearchResults;
