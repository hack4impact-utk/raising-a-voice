"use strict";

let express = require("express");
let router = express.Router();
let loginCtrl = require("./controller.login");

router.post("/", loginCtrl.login);

module.exports = router;
