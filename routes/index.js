var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "Hello! This web was created using express and pug templates engine.",
    user: "Yago",
    added: new Date().toLocaleString(),
  },
  {
    text: "You can add a new message using the button below. Cheers!",
    user: "Ricardo",
    added: new Date().toLocaleString(),
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
    added: new Date().toLocaleString(),
  });
  res.redirect("/");
});

module.exports = router;
