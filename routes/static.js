// Static page routing
const express = require("express");
const staticController = require("../controllers/static-controller");
const router = express.Router();
require("../controllers/static-controller");

// @URL             -----       /
// @Method          -----       GET
// @Description     -----       Landing page of the web app
// @Auth Required   -----       No
router.get("/", staticController.index);

// @URL             -----       /
// @Method          -----       GET
// @Description     -----       Route list and other details about the project
// @Auth Required   -----       No
router.get("/details", staticController.details);

module.exports = router;
