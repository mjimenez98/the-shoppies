import React from 'react';
import { BDiv } from 'bootstrap-4-react';

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
      <BDiv>
        <BDiv display="flex" justifyContent="center" mb="4">
          <h5>Search Results</h5>
        </BDiv>
        <BDiv>
          {movieResults.map((movie: Movie) => (
            <SearchResultsMovie
              key={movie.key}
              movie={movie}
              addNominee={addNominee}
            />
          ))}
        </BDiv>
      </BDiv>
    );
  }
}

export default SearchResults;
