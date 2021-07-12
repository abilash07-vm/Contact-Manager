const mongoose = require("mongoose");

module.exports = new mongoose.Schema({
  name: {
    type: String,
  },
  address: {
    type: String,
  },
  phone: {
    type: String,
  },
  photourl: {
    type: String,
  },
});
