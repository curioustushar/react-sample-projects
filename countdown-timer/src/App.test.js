import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders old iphone giveaway text', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/old iphone giveaway/i);
  expect(linkElement).toBeInTheDocument();
});
