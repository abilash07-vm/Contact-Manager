const express = require("express");
const router = express.Router();
const { authenticateUser } = require("../controller/userController");

module.exports = () => {
  router.route("").post(authenticateUser);

  return router;
};
