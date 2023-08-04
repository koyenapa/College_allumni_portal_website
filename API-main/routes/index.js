const express = require("express");
const router = express.Router();

const questionRouter = require("./Question");
const answerRouter = require("./Answer");
const problemRouter = require("./Problem")

router.get("/", (req, res) => {
  res.send("This api is reserved for quora clone");
});
// router.get("/problems", (req, res) => {
//   res.send("This api is reserved for problem clone");
// });

router.use("/questions", questionRouter);
router.use("/answers", answerRouter);
router.use("/problems", problemRouter);

module.exports = router;