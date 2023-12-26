const router = require("express").Router();

const userController = require("../controller/userController");

// create account routes
router.post("/register", userController.createUser);

// login routes

router.post("/login", userController.loginUser);

module.exports = router;