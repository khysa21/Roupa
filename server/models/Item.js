const mongoose = require("mongoose");

const Item = new mongoose.Schema({
  id: { type: String, required:true},
  name: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  status: {type: String},
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  image: { type: String, required: true },
  userid: { type: String, required:true},
});

const itemModel = mongoose.model("item", Item);

module.exports = itemModel;