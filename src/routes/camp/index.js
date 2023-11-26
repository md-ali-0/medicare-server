const findAll = require('../../api/camps/findAll')
const findPopular = require('../../api/camps/findPopular')
const findUpcoming = require('../../api/camps/findUpcoming')
const findSingle = require('../../api/camps/findSingle')
const verifyToken = require('../../middlewares/verifyToken')

const router = require('express').Router()

router.get('/camps',findAll)
router.get('/popular-camps', findPopular)
router.get('/upcoming-camps', findUpcoming)
router.get('/camp-details/:campId', findSingle)

module.exports = router