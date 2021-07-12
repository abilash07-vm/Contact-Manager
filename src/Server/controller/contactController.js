const mongoose = require("mongoose");
const contactSchema = require("../model/contactSchema");

const Contact = mongoose.model("Contact", contactSchema);

const addManyContacts = (contacts) => {
  Contact.insertMany(contacts)
    .then((data) => {
      console.log(`contacts added ${data}`);
    })
    .catch((err) => console.log(`contact add: ${err}`));
};

const getAllContacts = (req, res) => {
  Contact.find({})
    .then((contacts) => {
      res.status(201).send(contacts);
    })
    .catch((err) => {
      console.log("error at getAllContact " + err);
    });
};

module.exports = {
  addManyContacts,
  getAllContacts,
};
