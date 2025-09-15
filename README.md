# mongodb-graphql-demo

A tutorial repository for MongoDB and GraphQL integration.

## Step-1

Create `docker-compose.yml` with mongodb service.

```script
docker-compose up --build
```

After building then run

```script
docker-compose up

```

## Setting up the project

```script
npm init -y
```

Next, install necessary dependencies

```script
npm install express graphql graphql-tools apollo-server-express mongodb mongoose
```

This command sets up everything you need to build a Node.js + Express + GraphQL server connected to MongoDB, with both low-level (mongodb) and high-level (mongoose) database access options.

### Packages being installed

`express`

- A popular web framework for Node.js.

- Helps you create a server that can handle HTTP requests and responses.

`graphql`

- The core GraphQL library.

- Lets you define schemas, types, queries, and mutations for your GraphQL API.

`graphql-tools`

- Utility library to help build and manipulate GraphQL schemas.

- Makes it easier to merge schemas, define resolvers, and use schema stitching.

`apollo-server-express`

- Allows you to integrate Apollo Server with Express.

- Apollo Server handles GraphQL requests, while Express handles routing and middleware.

`mongodb`

- The official MongoDB Node.js driver.

- Lets your Node.js app connect directly to a MongoDB database and perform CRUD operations.

`mongoose`

- An Object Data Modeling (ODM) library for MongoDB.

- Provides schema-based modeling, validation, and easier interaction with MongoDB.

- Think of it as a “higher-level abstraction” on top of the mongodb driver.

`mongodb` → raw driver, you control everything, less abstraction.

`mongoose` → aa Node.js library used to interact with MongoDB. Think of Mongoose as a "middleman" that helps you work with MongoDB using JavaScript objects instead of writing raw database commands. It gives you schemas, validation, models, and easier coding.

### Connecting to MongoDB

👉 checkout [database.js](/database.js) file for code.
👉 checkout [ConnectingToMongoDbB markdown file](/ConnectingToMongoDbB.md) for further explaination


### Creating Express application to serve GraphQL API
👉 checkout [`app.js`](/app.js)

**Resource Links**

https://codedamn.com/news/databases/mongodb-graphql
