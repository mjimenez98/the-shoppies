import React from 'react';

import { Movie } from '../SearchBar';
import Nominee from './Nominee';

interface Props {
  nominees: Array<Movie>,
  removeNominee(movie: Movie): void,
}

class Nominations extends React.Component<Props, unknown> {
  constructor(props: Props) {
    super(props);

    this.removeNominee = this.removeNominee.bind(this);
  }

  removeNominee(movie: Movie): void {
    const { removeNominee } = this.props;
    removeNominee(movie);
  }

  render(): React.ReactNode {
    const { nominees, removeNominee } = this.props;
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
              removeNominee={removeNominee}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Nominations;
