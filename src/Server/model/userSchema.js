const mongoose = require("mongoose");

module.exports = new mongoose.Schema({
  username: {
    type: String,
  },
  admin: {
    type: Boolean,
  },
  password: {
    type: String,
  },
});
