const express = require('express')

const SettApp = ('../aio_app/sett-app')
const router = express.Router()

router.get('/', SettApp.getWebhookURL)
router.post('/', SettApp.createTasks)
router.delete('/', SettApp.autoStopTask)
router.delete('/', SettApp.stopTaskMode)
router.set('/', SettApp.setDataUsageLimit)




module.exports = router

