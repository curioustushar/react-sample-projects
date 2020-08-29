import React, { createContext, useState } from 'react';
export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [type, setType] = useState('Trending');
  return (
    <AppContext.Provider value={{ type, setType }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider };
