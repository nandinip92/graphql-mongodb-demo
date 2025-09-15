# Express application `app.js` file

In Following code, we first connect to our MongoDB database using the connectToDatabase function from database.js. Then, we create an Express app and an Apollo Server instance, which we'll configure with our GraphQL schema and resolvers later. Finally, we start the Express server on port 4000.

```javascript
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
```

# Defining the GraphQL Schema and Resolvers

Before we can use our GraphQL API, we need to define the schema and resolvers. The schema describes the types and operations available in our API, while the resolvers specify how to fetch the data for each operation.

## Schema

**👉Checkout `schema.js` in this project directory**

```javascript
// Imports the `gql` template literal function from Apollo Server Express.
//`gql` helps you write GraphQL schema definitions in a clean, readable way.
const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    getAllUsers: [User!]!
  }

  type User {
    id: ID!
    name: String!
    age: Int!
  }

  type Mutation {
    createUser(name: String!, age: Int!): User!
  }
`;

module.exports = typeDefs;
```

In this schema, we define a `User` type with three fields: `id`, `name`, and `age`. We also define two operations: `getAllUsers`, which returns a list of all users, and `createUser`, which creates a new user.

Now, let's create a Mongoose model for our `User` type.

**👉Checkout `user.model.js` in this project directory**

```javascript
// Import mongoose (MongoDB ODM library for Node.js)
// Mongoose helps define schemas and interact with MongoDB in an object-oriented way
const mongoose = require("mongoose");

// Define a schema for the "User" collection
// A schema is like a blueprint that describes the structure of the documents in MongoDB
const UserSchema = new mongoose.Schema({
  name: String, 
  age: Number, 
});

// Create a Mongoose model based on the schema
// - First argument "User" → the name of the model (Mongoose will create a "users" collection in MongoDB)
// - Second argument is the schema we defined above
const UserModel = mongoose.model("User", UserSchema);

// Export the model so it can be used in other files
// Example: You can import UserModel and run queries like UserModel.find(), UserModel.create(), etc.
module.exports = UserModel;
```
