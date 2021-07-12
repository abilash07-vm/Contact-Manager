const mongoose = require("mongoose");

module.exports = new mongoose.Schema({
  username: String,
  admin: Boolean,
  password: String,
});
