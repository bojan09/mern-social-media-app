const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Hey, it's user auth");
});

module.exports = router;
