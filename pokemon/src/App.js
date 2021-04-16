import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/react-hooks';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { PokemonDetail } from './components/PokemonDetail';
import { store } from './store';
import { Provider } from 'react-redux';
import './App.css';

function App() {
  const client = new ApolloClient({
    uri: 'https://graphql-pokemon2.vercel.app/',
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Router hashType="slash">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/pokemon/:id">
              <PokemonDetail />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </ApolloProvider>
  );
}

export default App;
