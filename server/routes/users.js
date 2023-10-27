const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Hey, it's user routes");
});

module.exports = router;
