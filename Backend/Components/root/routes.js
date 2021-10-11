'use strict';

let express = require('express');

let router = express.Router();
let rootCtrl = require('./controller.root');

/***
 * This is root endpoint that can give user information about environment and application version
 */
router.get('/', rootCtrl.root);

module.exports = router;
