# Connecting to MongoDB
👉 chekout [database.js](/database.js) file.

```javascript
const mongoose = require('mongoose');
```
- **Imports Mongoose** → a Node.js library used to interact with MongoDB.
- Think of Mongoose as a "middleman" that helps you work with MongoDB using JavaScript objects instead of writing raw database commands.

```javascript
async function connectToDatabase() {
  try {
    await mongoose.connect('mongodb://localhost:27017/graphql-mongo', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Successfully connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

module.exports = connectToDatabase;
```
**_Explaination for the above code:_**

- Defines an `async` function connectToDatabase.
    1. Inside the function:
        - `mongoose.connect(...)` → tries to connect to MongoDB at:
        - `mongodb://localhost:27017` → your MongoDB server running locally on port 27017.

        - `graphql-mongo` → the database name (MongoDB will create it automatically if it doesn’t exist).

    2. Options:
        - `useNewUrlParser: true` → makes sure the new URL parser is used (fixes deprecation warnings).

        - `useUnifiedTopology: true` → uses the latest connection engine for better stability.

- If the connection works → logs `"Successfully connected to MongoDB"`.

- If it fails → catches the error and logs `"Error connecting to MongoDB: ..."`.

```javascript
module.exports = connectToDatabase;
```
Exports the function so you can reuse it in other files.

Example: in `server.js`/ `app.js`, you can call it like:

```javascript
const connectToDatabase = require('./db');
connectToDatabase();
```

