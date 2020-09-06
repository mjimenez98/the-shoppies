import React from 'react';

import { Movie } from './SearchBar';

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
        {movieResults.map((movie: Movie) => (
          <li key={`${movie.title} (${movie.year})`}>
            {`${movie.title} (${movie.year})`}
          </li>
        ))}
        <p>{movieNominated}</p>
      </div>
    );
  }
}

export default SearchResults;
