"use strict";

let express = require("express");

let router = express.Router();
let loginCtrl = require("./controller.login");

/***
 * This is root endpoint that can give user information about environment and application version
 */
router.get("/", loginCtrl.root);

module.exports = router;
