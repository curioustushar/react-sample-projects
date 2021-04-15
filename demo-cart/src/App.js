import React from 'react';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
        <Router>
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
              <Switch>
                <Route path="/">
                  <Home />
                </Route>
                <Route path="/product/add">
                  <ProductAddEdit />
                </Route>
                <Route path="/product/:id">
                  <ProductDetails />
                </Route>
                <Route path="/cart">
                  <Cart />
                </Route>
              </Switch>
            </Box>
          </ChakraProvider>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
