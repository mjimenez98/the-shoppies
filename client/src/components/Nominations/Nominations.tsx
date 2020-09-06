import React from 'react';

import { Movie } from '../SearchBar';
import Nominee from './Nominee';

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
            <Nominee
              key={movie.title}
              movie={movie}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Nominations;
