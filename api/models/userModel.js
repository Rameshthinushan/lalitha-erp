const connection = require('../config');

const getUserCollection = async() => {
  const database = await connection();
  return database.collection('users');
}

const findUserById = async(id) =>  {
  const collection = await getUserCollection();
  const user = await collection.findOne({ user: '1' });
  return user;
}

module.exports = { findUserById };