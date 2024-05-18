const router = require('express').Router();
const registeredUsersController = require('../controller/user_controller/userRegisterController');

router.post('/register_for', registeredUsersController.registerUser);

router.get('/registered_users/:id', registeredUsersController.registeredUsersbyCampaign);

module.exports = router;