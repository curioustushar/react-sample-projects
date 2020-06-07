import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Click on clock to change formats text', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Click on clock to change formats/i);
  expect(linkElement).toBeInTheDocument();
});
