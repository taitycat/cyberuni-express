var express = require("express");
var router = express.Router();
var request = require("request");

router.get("/", function (req, res, next) {
  request(
    "https://api.thecatapi.com/v1/images/search",
    function (error, response, body) {
      if (error) return next(error);
      if (response.statusCode !== 200)
        return res.status(response.statusCode).send(body);

      const data = JSON.parse(body);
      const catImageUrl = data[0].url;

      // ブラウザに返す（JSONで返す）
      res.json({ url: catImageUrl });
    }
  );
});

module.exports = router;
