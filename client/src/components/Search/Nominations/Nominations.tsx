import React from 'react';
import { BDiv } from 'bootstrap-4-react';

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
      <BDiv>
        <BDiv display="flex" justifyContent="center" mb="4">
          <h5>My Nominations</h5>
        </BDiv>
        <BDiv>
          {nominees.map((movie: Movie) => (
            <Nominee
              key={movie.title}
              movie={movie}
              removeNominee={removeNominee}
            />
          ))}
        </BDiv>
      </BDiv>
    );
  }
}

export default Nominations;
