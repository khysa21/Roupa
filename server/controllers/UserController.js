const user = require("../models/User");

async function getUser(req, res) {
  try {
    res.status(200).send(await user.find({}));
  } catch (error) {
    res.status(400).send({
      error,
    });
  }
}

async function createUser(req, res) {
  try {
    const newUser = await user.create(req.body);
    await newUser.save();
    res.status(201).send(newUser);
  } catch (error) {
    res.status(400).send({
      error,
    });
  }
}

module.exports = {
  getUser,
  createUser,
};
