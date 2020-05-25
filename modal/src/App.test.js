import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Modal Project text', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Modal Project/i);
  expect(linkElement).toBeInTheDocument();
});
