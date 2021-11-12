
"use strict";

let express = require("express");
let router = express.Router();
let calendarCtrl = require("./calendar.controller");

router.get("/:month/:year", calendarCtrl.getCalendarWithProfiles);
router.post("/tagprofile", calendarCtrl.tagProfiletoCalendar);


module.exports = router;
