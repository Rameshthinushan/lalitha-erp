const { MongoClient } = require('mongodb');
require('dotenv').config();

let db;
const connectDatabase = async() => {
  const client = new MongoClient(
    process.env.MONGODB_CONNECTION_STRING
  );
  await client.connect();
  db = client.db(process.env.DATABASE_NAME);
  return db;
}

module.exports = connectDatabase


