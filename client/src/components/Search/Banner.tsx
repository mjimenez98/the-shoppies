import React, { FunctionComponent } from 'react';
import { Alert } from 'bootstrap-4-react';

const Banner: FunctionComponent = () => (
  <>
    <Alert info>
      <span role="img" aria-label="partying face">🥳 </span>
      Congrats! You have nominated 5 films.
      Feel free to edit your choices as you need.
    </Alert>
  </>
);

export default Banner;
