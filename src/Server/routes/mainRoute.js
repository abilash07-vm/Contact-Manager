const express = require("express");
const router = express.Router();

const contactRoute = require("./contactRoute");
module.exports = () => {
  router.get("/", (req, res) => {
    res.send("Connected...");
  });
  router.use("/contacts", contactRoute());

  return router;
};
