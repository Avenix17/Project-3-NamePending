const express = require('express');
const { ApolloServer } = require('apollo-server-express');

const { typeDefs, resolver } = require('./schemas');
const db = require('./config/connection');

const app = express();
const PORT = process.env.port || 3001;
const server = new ApolloServer({ typeDefs, resolver })

const startApolloServer = async (typeDefs, resolvers) => {
await server.start();
server.applyMiddleware({ app });

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  })
})
};

startApolloServer(typeDefs, resolver);