import React from 'react';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';
import ProductAddEdit from './components/ProductAddEdit';
import Cart from './components/Cart';

import { Provider } from 'react-redux';
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router hashType="slash">
          <ChakraProvider theme={theme}>
            <NavBar />
            <Box
              textAlign="center"
              fontSize="xl"
              height="calc(100vh - 64px)"
              width="90%"
              pt={16}
              ml={'auto'}
              mr={'auto'}
            >
              <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route
                  exact
                  path="/product/add"
                  element={<ProductAddEdit />}
                ></Route>
                <Route
                  exact
                  path="/product/:id"
                  element={<ProductDetails />}
                ></Route>
                <Route exact path="/cart" element={<Cart />}></Route>
              </Routes>
            </Box>
          </ChakraProvider>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
