import React from 'react';
import { Movie } from './SearchBar';

interface Props {
  nominees: Array<Movie>,
}

class Nominations extends React.Component<Props, unknown> {
  render(): React.ReactNode {
    const { nominees } = this.props;
    return (
      <div>
        <div>
          <h5>My Nominations</h5>
        </div>
        <div>
          {nominees.map((movie: Movie) => (
            <li key={movie.key}>
              {movie.key}
            </li>
          ))}
        </div>
      </div>
    );
  }
}

export default Nominations;
