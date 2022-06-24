var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "Hello there",
    user: "Carlos",
    added: new Date().toDateString(),
  },
  {
    text: "I'm Sofia",
    user: "Sofia",
    added: new Date().toDateString(),
  },
];

router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Message Board", messages: messages });
});

router.get("/new", function (req, res, next) {
  res.render("form");
});

router.post("/new", function (req, res, next) {
  messages.push({
    text: req.body.text,
    user: req.body.user,
    added: new Date().toDateString(),
  });
  res.redirect("/");
});

module.exports = router;
