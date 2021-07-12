const userSchema = require("../model/userSchema");
const mongoose = require("mongoose");

const User = mongoose.model("User", userSchema);

const addManyUsers = (initialData) => {
  User.insertMany(initialData)
    .then((data) => {
      console.log(`users added ${data}`);
    })
    .catch((err) => {
      console.log(`error ocuuered while adding user ${err}`);
    });
};

module.exports = {
  addManyUsers,
};
