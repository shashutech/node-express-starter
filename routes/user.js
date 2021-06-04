const express = require("express");
const userController = require("../controllers/user-controller");
const router = express.Router();

// @URL             -----       /users/register
// @Method          -----       GET
// @Description     -----       User registration form view
// @Auth Required   -----       No
router.get("/register", userController.register);

// @URL             -----       /users/register
// @Method          -----       POST
// @Description     -----       User registration form submittion data handling
// @Auth Required   -----       No
router.post("/register", userController.handleRegistration);

// @URL             -----       /users/login
// @Method          -----       GET
// @Description     -----       User login form view
// @Auth Required   -----       No
router.get("/login", userController.login);

// @URL             -----       /users/login
// @Method          -----       POST
// @Description     -----       User login form submittion data handling
// @Auth Required   -----       No
router.post("/login", userController.handleLogin);

module.exports = router;
