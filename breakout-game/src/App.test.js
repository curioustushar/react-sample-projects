import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Breakout!', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Breakout/i);
  expect(linkElement).toBeInTheDocument();
});
