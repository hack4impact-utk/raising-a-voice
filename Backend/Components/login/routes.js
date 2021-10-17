"use strict";

let express = require("express");
let router = express.Router();
let rootCtrl = require("./controller.login");



router.get("/login", loginCtrl.login);

module.exports = router;
