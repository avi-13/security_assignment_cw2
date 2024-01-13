const router = require("express").Router();

const userController = require("../controller/userControllers");

// create account routes
router.post("/register", userController.createUser);

// login routes

router.post("/login", userController.loginUser);

router.put("/beadonor/:id", userController.beAdonor);

router.get("/getAllUsers", userController.getAllUsers);

router.get("/single_user/:id", userController.getSingleUser);

router.put("/updateUser/:id", userController.updateUser);

module.exports = router;
