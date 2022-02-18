'use strict';

let express = require('express');

let router = express.Router();
let toDoList = require('./controller.root');

/***
 * This is root endpoint that can give user information about environment and application version
 */
router.get("/", toDoList.root);
router.post("/", toDoList.post);
router.put("/", toDoList.put);
router.delete("/", toDoList.Delete);
module.exports = router;
