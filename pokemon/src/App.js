import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { PokemonWrapper } from './components/PokemonWrapper';
import { PokemonDetail } from './components/PokemonDetail';
import './App.css';

function App() {
  const client = new ApolloClient({
    uri: 'https://graphql-pokemon2.vercel.app/',
  });

  return (
    <ApolloProvider client={client}>
      <Router hashType="slash">
        <Switch>
          <Route exact path="/">
            <PokemonWrapper />
          </Route>
          <Route exact path="/pokemon/:id">
            <PokemonDetail />
          </Route>
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
