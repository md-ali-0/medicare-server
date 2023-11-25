const findAll = require('../../api/camps/findAll')

const router = require('express').Router()

router.get('/camps',findAll)

module.exports = router