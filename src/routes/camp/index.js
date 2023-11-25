const findAll = require('../../api/camps/findAll')
const findPopular = require('../../api/camps/findPopular')

const router = require('express').Router()

router.get('/camps',findAll)
router.get('/popular-camps',findPopular)

module.exports = router