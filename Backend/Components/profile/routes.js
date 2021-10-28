let express = require('express')

let router = express.Router()
let profileCtrl = require('./controller.profile')

router.post('/create', profileCtrl.create)
router.get('/getAll', profileCtrl.getAll)

module.exports = router
