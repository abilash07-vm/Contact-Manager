const userSchema = require("../model/userSchema");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

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

const authenticateUser = (req, res) => {
  let user = req.body;
  User.findOne({ username: user.username }).then((data) => {
    if (!data) {
      res.status(404).json({ error: "User not found" });
    }
    if (!bcrypt.compareSync(user.password, data.password)) {
      res.status(401).json({ error: "incorrect password" });
    }
    const payload = {
      username: data.username,
      admin: data.admin,
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "4h",
    });
    res.status(201).json({
      message: "authenticated sucessfully",
      token: token,
    });
  });
};

module.exports = {
  addManyUsers,
  authenticateUser,
};
