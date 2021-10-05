const passport = require('passport')
const validator = require('validator')
const User = require('../models/User')

exports.login = (req, res, next) => {
	if (!validator.isEmail(req.body.email))
		res.json({ msg: 'Please enter a valid email address.' })
	if (validator.isEmpty(req.body.password))
		res.json({ msg: 'Password cannot be blank.' })

	req.body.email = validator.normalizeEmail(req.body.email, {
		gmail_remove_dots: false,
	})

	passport.authenticate('local', (err, user, info) => {
		if (err) {
			return next(err)
		}
		if (!user) {
			res.json({ msg: 'User not found.' })
		}
		req.logIn(user, (err) => {
			if (err) {
				return next(err)
			}
			res.json({ msg: 'Success! You are logged in.' })
		})
	})(req, res, next)
}

exports.logout = (req, res) => {
	req.logout()
	req.session.destroy((err) => {
		if (err)
			res.json({ msg: 'Error : Failed to destroy the session during logout.' })
		req.user = null
	})
	res.status(200)
}

exports.signup = (req, res, next) => {
	const validationErrors = []

	if (!validator.isEmail(req.body.email))
		validationErrors.push({ msg: 'Please enter a valid email address.' })

	if (!validator.isLength(req.body.password, { min: 8 }))
		validationErrors.push({
			msg: 'Password must be at least 8 characters long',
		})

	if (req.body.password !== req.body.confirmPassword)
		validationErrors.push({ msg: 'Passwords do not match' })

	if (validationErrors.length) {
		req.flash('errors', validationErrors)
	}

	req.body.email = validator.normalizeEmail(req.body.email, {
		gmail_remove_dots: false,
	})

	const user = new User({
		userName: req.body.userName,
		email: req.body.email,
		password: req.body.password,
	})

	User.findOne(
		{ $or: [{ email: req.body.email }, { userName: req.body.userName }] },
		(err, existingUser) => {
			if (err) {
				return next(err)
			}
			if (existingUser) {
				res.json({
					msg: 'Account with that email address or username already exists.',
				})
			}
			user.save((err) => {
				if (err) {
					return next(err)
				}
				req.logIn(user, (err) => {
					if (err) {
						return next(err)
					}
					res.json({ msg: 'Signup successful' })
				})
			})
		}
	)
}
