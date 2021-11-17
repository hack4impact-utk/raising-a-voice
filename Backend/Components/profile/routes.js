let express = require('express')

let router = express.Router()
let profileCtrl = require('./controller.profile')
let profileData = require("./controller.profileData");


router.post('/create', profileCtrl.create)
router.get('/getAll', profileCtrl.getAll)
router.get("/getprofile", profileData.getData);

module.exports = router
