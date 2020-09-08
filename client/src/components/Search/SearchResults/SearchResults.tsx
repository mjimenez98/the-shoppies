import React from 'react';

import { Movie } from '../SearchBar';
import SearchResultsMovie from './SearchResultsMovie';

interface Props {
  movieResults: Array<Movie>,
  addNominee(movie: Movie): void,
}

class SearchResults extends React.Component<Props, unknown> {
  constructor(props: Props) {
    super(props);

    this.addNominee = this.addNominee.bind(this);
  }

  private addNominee(movie: Movie) {
    const { addNominee } = this.props;
    addNominee(movie);
  }

  render(): React.ReactNode {
    const { movieResults, addNominee } = this.props;
    return (
      <div>
        <div>
          <h5>Search Results</h5>
        </div>
        <div>
          {movieResults.map((movie: Movie) => (
            <SearchResultsMovie
              key={movie.key}
              movie={movie}
              addNominee={addNominee}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default SearchResults;
