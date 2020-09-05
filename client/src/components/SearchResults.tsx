import React from 'react';

import { Movie } from './Search';

interface Props {
  movieResults: Array<Movie>,
}

class SearchResults extends React.Component<Props, unknown> {
  render(): React.ReactNode {
    return (
      <div>
        {this.props.movieResults.map((movie: Movie) => (
          <li key={`${movie.title} (${movie.year})`}>
            {`${movie.title} (${movie.year})`}
          </li>
        ))}
      </div>
    );
  }
}

export default SearchResults;
