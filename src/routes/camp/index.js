const findAll = require('../../api/camps/findAll')
const findPopular = require('../../api/camps/findPopular')
const findUpcoming = require('../../api/camps/findUpcoming')
const findSingle = require('../../api/camps/findSingle')
const findAvailable = require('../../api/camps/findAvailable')
const addRegistered = require('../../api/camps/addRegistered')
const createCamp = require('../../api/camps/createCamp')
const verifyToken = require('../../middlewares/verifyToken')

const router = require('express').Router()

router.get('/camps',findAll)
router.get('/popular-camps', findPopular)
router.get('/upcoming-camps', findUpcoming)
router.get('/available-camps', verifyToken, findAvailable)
router.get('/camp-details/:campId', findSingle)
router.post('/add-registered-camp', verifyToken, addRegistered)
router.post('/add-a-camp', verifyToken, createCamp)

module.exports = router