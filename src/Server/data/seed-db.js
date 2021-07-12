require("dotenv").config();

const users = require("./users.json");
const contacts = require("./contacts.json");

const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

function seedCollection(collectionName, initialData) {
  mongoose.connect(
    process.env.DB_CONN,
    { useUnifiedTopology: true, useNewUrlParser: true },
    (err) => {
      if (err) {
      } else {
        console.log("Connected to mongodb...");

        collection.remove();
        initialData.forEach((element) => {
          if (element.password) {
            element.password = bcrypt.hashSync(element.password, 10);
          }
        });
        collection.insertMany(initialData, (err, res) => {
          console.log(`${res.insertedCount} record inserted...`);
          console.log("closing db");
          db.close();
        });
      }
    }
  );
}
seedCollection("contacts", contacts);
seedCollection("users", users);
