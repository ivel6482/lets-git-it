const express = require('express')
const router = express.Router()
const { login, logout, getSignup, Signup } = require('../controllers/auth')
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.post('/login', login)
router.get('/logout', logout)
router.post('/signup', signup)

module.exports = router
