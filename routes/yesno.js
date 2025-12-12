var express = require("express");
var router = express.Router();

router.get("/", async function (req, res, next) {
  try {
    const r = await fetch("https://yesno.wtf/api");
    const data = await r.json();

    res.render("yesno", {
      title: "Yes / No",
      answer: data.answer,
      imageUrl: data.image,
    });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
