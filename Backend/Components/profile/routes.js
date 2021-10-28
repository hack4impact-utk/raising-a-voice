let express = require('express')

let router = express.Router()
let profileCtrl = require('./controller.profile')

router.post('/createProfile', profileCtrl.create)
router.get('/getAllProfiles', profileCtrl.getAllProfiles)

module.exports = router
