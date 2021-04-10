import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { PokemonWrapper } from './components/PokemonWrapper';
import './App.css';

function App() {
  const client = new ApolloClient({
    uri: 'https://graphql-pokemon2.vercel.app/',
  });

  return (
    <ApolloProvider client={client}>
      <PokemonWrapper />
    </ApolloProvider>
  );
}

export default App;
