const findAll = require('../../api/camps/findAll')
const findPopular = require('../../api/camps/findPopular')
const findUpcoming = require('../../api/camps/findUpcoming')
const findSingle = require('../../api/camps/findSingle')
const addRegistered = require('../../api/camps/addRegistered')
const verifyToken = require('../../middlewares/verifyToken')

const router = require('express').Router()

router.get('/camps',findAll)
router.get('/popular-camps', findPopular)
router.get('/upcoming-camps', findUpcoming)
router.get('/camp-details/:campId', findSingle)
router.post('/add-registered-camp', addRegistered)

module.exports = router