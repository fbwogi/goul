const express = require('express')

const UserApp = ('../aio_app/user-app')
const router = express.Router()

router.get('/', UserApp.getKey)
router.get('/', UserApp.createUser)
router.get('/', UserApp.getUserbyEmail)
router.get('/', UserApp.getUserbyUserID)

module.exports = router
