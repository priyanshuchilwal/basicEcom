const express = require("express");
const router = express.Router();

router
  .route("/login")
  .get((req, res) => {
    res.render("pages/login", { title: "login" });
  })
  .post((req, res) => {});

router
  .route("/signup")
  .get((req, res) => {
    res.render("pages/signup", { title: "signup" });
  })
  .post((req, res) => {});

module.exports = router;
