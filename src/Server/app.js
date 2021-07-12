require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const mainRoute = require("./routes/mainRoute");

const app = express();

const PORT = process.env.port | 3000;
const mongourl = process.env.DB_CONN;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.Promise = Promise;

mongoose
  .connect(process.env.DB_CONN, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to mongodb...");
    app.listen(PORT, () => {
      console.log(`Listening At ${PORT}`);

      app.use("/api", mainRoute());
    });
  })
  .catch((err) => console.log(`mongodb error: ${err}`));
