const userModel = require('../models/userModel');

async function getUser(req, res) {
  try {
    const user = await userModel.findUserById({ user: '1' });
    console.log(user)
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).send('User not found');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

module.exports = {getUser};