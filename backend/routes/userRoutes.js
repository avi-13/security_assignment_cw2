const router = require("express").Router();

const userController = require("../controller/user_controller/userControllers");

// create account routes
router.post("/register", userController.createUser);

// login routes

router.post("/login", userController.loginUser);

router.post("/send_otp", userController.sendVerification);

router.put("/beadonor/:id", userController.beAdonor);

router.get("/getAllUsers", userController.getAllUsers);

router.get("/single_user/:id", userController.getSingleUser);

router.put("/updateUser/:id", userController.updateUser);

router.post("/forgetpassword", userController.forgetPassword);

// for flutter
router.put("/update_user/:id", userController.updateUserWithoutImage);

router.get("/search_user", userController.searchUsers);

router.get("/get_my_request/:id", userController.getRequestsByUserId);


module.exports = router;
