var express = require("express");
var router = express.Router();
const contacts = require("./contacts");

/* GET home page. */
router.use("/", contacts);

module.exports = router;
