const findAll = require('../../api/camps/findAll')
const findPopular = require('../../api/camps/findPopular')
const findUpcoming = require('../../api/camps/findUpcoming')
const verifyToken = require('../../middlewares/verifyToken')

const router = require('express').Router()

router.get('/camps',findAll)
router.get('/popular-camps', findPopular)
router.get('/upcoming-camps', findUpcoming)

module.exports = router