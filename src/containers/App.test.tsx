import React from 'react';
import { render } from '@testing-library/react';
import Header from '../components/Header';

test('renders title in navbar', () => {
  const { getByText } = render(<Header />);
  const title = getByText(/The Shoppies/);
  expect(title).toBeInTheDocument();
});
