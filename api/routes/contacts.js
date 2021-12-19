var express = require("express");
var router = express.Router();
const { signUp, allContacts } = require("../controllers/contactsController");

/* GET users listing. */
router.post("/signup", signUp);
router.get("/allContacts", allContacts);

module.exports = router;
