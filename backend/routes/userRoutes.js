const router = require("express").Router();

const userController = require("../controller/userControllers");

// create account routes
router.post("/register", userController.createUser);

// login routes

router.post("/login", userController.loginUser);

router.put("/be_a_donor/:id", userController.beAdonor);

router.get("/getAllUsers", userController.getAllUsers);

router.get("/user/:id", userController.getSingleUser);

module.exports = router;
