const mongoose = require("mongoose");

const User = new mongoose.Schema({
  id: { type: String, required:true},
  name: { type: String, required: true },
  surname: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const userModel = mongoose.model("user", User);

module.exports = userModel;