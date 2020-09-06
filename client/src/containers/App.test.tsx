import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Header from '../components/Header';
import { SearchBar } from '../components/SearchBar';



describe('Navbar', () => {
  test('renders title in navbar', () => {
    const { getByText } = render(<Header />);
    const title = getByText(/The Shoppies/);
    expect(title).toBeInTheDocument();
  });
});

describe('Search bar', () => {
  test('input is working successfully', () => {
    const component = render(<SearchBar sendMovies={() => {}} />)

    userEvent.type(screen.getByLabelText(
      /Search for your favorite movies to nominate/i),
      'Ten'
    )

    expect(screen.getByLabelText(
      /Search for your favorite movies to nominate/i)
    ).toHaveValue('Ten')
  });
});
