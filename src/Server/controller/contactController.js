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

module.exports = {
  addManyContacts,
};
