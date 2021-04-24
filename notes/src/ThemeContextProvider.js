import React, { createContext, useState } from 'react';

import { ThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';

export const light = {
  palette: {
    type: 'light',
  },
};

export const dark = {
  palette: {
    type: 'dark',
  },
};
export const ThemeContext = createContext();
const ThemeContextProvider = ({ children }) => {
  const [isDark, setDarkMode] = useState(
    window.matchMedia('(prefers-color-scheme: dark)').matches,
  );
  const theme = createMuiTheme(isDark ? dark : light);
  const toggleTheme = () => {
    setDarkMode(() => !isDark);
  };
  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
