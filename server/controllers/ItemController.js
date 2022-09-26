const item = require("../models/Item");

async function getAllItems(req, res) {
  try {
    res.status(200).send(await item.find({}));
  } catch (error) {
    res.status(400).send({
      error,
    });
  }
}

async function createItem(req, res) {
  try {
    const newItem = await item.create(req.body);
    await newItem.save();
    res.status(201).send(newItem);
  } catch (error) {
    res.status(400).send({
      error,
    });
  }
}

async function updateItem(req, res) {
  item.findOneAndUpdate({id: req.body.id}, req.newData, {upsert: true}, function(err, doc) {
    if (err) return res.send(500, {error: err});
    return res.send('Succesfully saved.');
  });
}

module.exports = {
  getAllItems,
  createItem,
  updateItem,
};
