const express = require("express");

const router = express.Router();

const userSignUpController = require("../controllers/userSignUp");

const userSignInController = require("../controllers/userSignIn");

router.post("/signup", userSignUpController);
router.post("/login", userSignInController);

module.exports = router;
