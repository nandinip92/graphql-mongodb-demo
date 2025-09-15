const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./schema"); // our GraphQL Schema
const resolvers = require("./resolvers"); // our GraphQL resolvers

const connectToDatabase = require("./database");

async function startServer() {
  // Create an Express app
  const app = express();

  // Create an Apollo server
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();

  // Apply the Apollo middleware to the Express app
  server.applyMiddleware({ app });

  //  Connect to the database
  await connectToDatabase();

  // Start the Express server
  app.listen({ port: 4000 }, () => {
    console.log(`Server ready at http://localhost:4000${server.graphqlPath}`);
  });
}

startServer();
