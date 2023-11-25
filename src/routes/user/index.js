const createUser = require('../../api/user/createUser')
const router = require('express').Router()

router.post('/add-user',createUser)

module.exports = router