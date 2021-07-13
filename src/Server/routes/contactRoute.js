const express = require("express");
const router = express.Router();

const {
  getAllContacts,
  addContact,
} = require("../controller/contactController");

module.exports = () => {
  router.route("").get(getAllContacts).post(addContact);

  return router;
};
