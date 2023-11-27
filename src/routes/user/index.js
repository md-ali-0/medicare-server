const createUser = require('../../api/user/createUser')
const verifyUser = require('../../api/user/verifyUser')
const findAll = require('../../api/user/findAll')
const router = require('express').Router()

router.post('/add-user',createUser)
router.get('/verify-user/:email',verifyUser)
router.get('/get-users/',findAll)

module.exports = router