"use strict";

let express = require("express");

let router = express.Router();
let toDoList = require("./controller.root");
let toDoListPost = require("./controller.post");
let toDoListPut = require("./controller.put");
let toDoListDelete = require("./controller.delete");
/***
 * This is root endpoint that can give user information about environment and application version
 */
router.get("/get", toDoList.root);
router.post("/post", toDoListPost.post);
router.put("/put", toDoListPut.put);
router.delete("/delete", toDoListDelete.Delete);
module.exports = router;
