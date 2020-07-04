import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import App from './App';

test('render buttons', () => {
  const { getByText } = render(<App />);
  const changeColorBtn = getByText(/Change Color/i);
  expect(changeColorBtn).toBeInTheDocument();
  const setColorBtn = getByText(/Set Hex Color/i);
  expect(setColorBtn).toBeInTheDocument();
});

test('change color', () => {
  const { getByText, getByTestId } = render(<App />);
  fireEvent.click(getByText('Change Color'));
  const item = getByTestId('color');
  const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'];
  const isColorExists = colors.includes(item.textContent);
  expect(isColorExists).toBeTruthy();
});

test('change color', () => {
  const { getByText, getByTestId } = render(<App />);
  fireEvent.click(getByText('Set Hex Color'));
  const item = getByTestId('color');
  const regex = /^#(?:[0-9a-f]{3}){1,2}$/i;
  const isValidHex = regex.test(item.textContent);
  expect(isValidHex).toBeTruthy();
});
