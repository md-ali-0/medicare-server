const { createAuthToken } = require('../../api/auth/createAuthToken')

const router = require('express').Router()

router.post('/jwt',createAuthToken)

module.exports = router