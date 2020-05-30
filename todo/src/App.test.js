import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Grocery Bud text', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Grocery Bud/i);
  expect(linkElement).toBeInTheDocument();
});
