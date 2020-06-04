const router = require("express").Router();
const verify = require("./verifyToken");

router.get("/", verify, (req, res) => {
  res.json({
    posts: {
      title: "first Post",
      description: "all the way down",
    },
  });
});

module.exports = router;
