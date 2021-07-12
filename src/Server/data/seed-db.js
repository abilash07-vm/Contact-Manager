require("dotenv").config();

const users = require("./users.json");
const contacts = require("./contacts.json");

const { addManyUsers } = require("../controller/userController");
const { addManyContacts } = require("../controller/contactController");

const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

function seedCollection(collectionName, initialData) {
  mongoose.connect(
    process.env.DB_CONN,
    { useUnifiedTopology: true, useNewUrlParser: true },
    (err) => {
      if (err) {
        console.log(`error occured while connecting mongodb: ${err.message}`);
      } else {
        console.log("Connected to mongodb...");
        initialData.forEach((element) => {
          if (element.password) {
            element.password = bcrypt.hashSync(element.password, 10);
          }
        });
        if (collectionName === "contacts") {
          addManyContacts(initialData);
        } else if (collectionName === "users") {
          addManyUsers(initialData);
        }
        // collection.insertMany(initialData, (err, res) => {
        //   console.log(`${res.insertedCount} record inserted...`);
        // });
      }
    }
  );
}
seedCollection("contacts", contacts);
seedCollection("users", users);
