import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Expense Tracker link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Expense Tracker/i);
  expect(linkElement).toBeInTheDocument();
});
