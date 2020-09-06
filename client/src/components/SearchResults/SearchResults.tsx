import React from 'react';

import { Movie } from '../SearchBar';
import SearchResultsMovie from './SearchResultsMovie';

interface Props {
  movieResults: Array<Movie>,
  sendNominee(movie: Movie): void,
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

    this.sendNominee = this.sendNominee.bind(this);
  }

  private sendNominee(movie: Movie) {
    const { sendNominee } = this.props;
    sendNominee(movie);
  }

  render(): React.ReactNode {
    const { movieResults, sendNominee } = this.props;
    const { movieNominated } = this.state;
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
              sendNominee={sendNominee}
            />
          ))}
          <p>{movieNominated}</p>
        </div>
      </div>
    );
  }
}

export default SearchResults;
