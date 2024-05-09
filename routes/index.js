const express = require("express");
const userSignUpController = require("../controllers/userSignUp");
const router = express.Router();

router.post("/signup", userSignUpController);

module.exports = router;
