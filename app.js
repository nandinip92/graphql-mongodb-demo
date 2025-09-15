const express = require('express');
const { ApolloServer } = require('apollo-server-express');

const connectToDatabase = require('./database');

async function startServer() {
  //  // Connect to the database
  await connectToDatabase();

  // Create an Express app
  const app = express();

  // Create an Apollo server
  const server = new ApolloServer({
    typeDefs: /* GraphQL schema */,
    resolvers: /* GraphQL resolvers */,
  });

  // Apply the Apollo middleware to the Express app
  server.applyMiddleware({ app });

  // Start the Express server
  app.listen({ port: 4000 }, () => {
    console.log(`Server ready at http://localhost:4000${server.graphqlPath}`);
  });
}

startServer();