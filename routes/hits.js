const express = require('express')
const router = express.Router()
const {
	createHit,
	deleteHit,
	getAllHits,
	getHit,
	updateHit,
} = require('../controllers/hits')

router.route('/').get(getAllHits).post(createHit)
router.route('/:id').get(getHit).put(updateHit).delete(deleteHit)

module.exports = router
