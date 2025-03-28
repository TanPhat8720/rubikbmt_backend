var express = require("express");
var router = express.Router();
router.use("/home", function (req, res) {
  res.json({ message: "Welcome to the home page!" });
});
router.use("/api/v1/auth", require("./api/authController"));
router.use("/api/v1/course", require("./api/courseController"));
router.use("/api/v1/cubeSubject", require("./api/cubeSubjectController"));
router.use("/api/v1/level", require("./api/levelController"));
module.exports = router;