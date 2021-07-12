const express = require("express");
const router = express.Router();

const { getAllContacts } = require("../controller/contactController");

module.exports = () => {
  router.route("").get(getAllContacts);

  return router;
};
