import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders our menu text', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/our menu/i);
  expect(linkElement).toBeInTheDocument();
});
