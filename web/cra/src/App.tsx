import React from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { HousesAndOwner } from './HousesAndOwner';
const client = new ApolloClient({
  uri: 'http://127.0.0.1:5600/graphql',
});
function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <HousesAndOwner />
      </div>
    </ApolloProvider>
  );
}

export default App;
