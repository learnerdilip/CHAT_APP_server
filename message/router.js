const express = require("express");

const { Router } = express;
const router = Router();

router.post("/message", (req, res, next) => {
  // console.log("req.body", req.body);
  res.send("Hi");
});

module.exports = router;
