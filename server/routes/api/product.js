const express = require('express')
const ProdApp = require('../aio_app/prod-app')

const router = express.Router()

router.get('/', ProdApp.getProductSKU)
router.get('/', ProdApp.getProductURL)
router.get('/', ProdApp.getProductKeyword)



module.exports = router
