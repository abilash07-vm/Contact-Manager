const express = require("express");
const router = express.Router();
const checkjwt = require("express-jwt");

const contactRoute = require("./contactRoute");
const authenticationRoute = require("./authenticationRoute");

module.exports = () => {
  router.use(
    checkjwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }).unless({
      path: "/api/authenticate",
    })
  );

  router.use((err, req, res, next) => {
    if (err.name === "UnauthorizedError") {
      res.status(401).json({ error: "Unauthorized user :(" });
    }
  });
  router.get("/", (req, res) => {
    res.send("Connected...");
  });
  router.use("/contacts", contactRoute());
  router.use("/authenticate", authenticationRoute());

  return router;
};
