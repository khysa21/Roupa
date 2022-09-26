const mongoose = require("mongoose");

mongoose.connect(`mongodb://127.0.0.1:27017/Roupa`,
  { useNewUrlParser: true, useUnifiedTopology: true }, 
  (error) => {
    if (error) throw error;
    console.log('Connected to db.');
  });

module.exports = mongoose;
