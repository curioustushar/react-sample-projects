import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders scroll project text', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/scroll project/i);
  expect(linkElement).toBeInTheDocument();
});
