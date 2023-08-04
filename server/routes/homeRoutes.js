const express = require("express");
const router = express.Router();

router.route("/").get((req, res) => {
  res.render("pages/home", { title: "home" });
});

router.route("/about").get((req, res) => {
  res.send("about");
});

router.route("/contact").get((req, res) => {
  res.send("contancts page");
});

module.exports = router;
