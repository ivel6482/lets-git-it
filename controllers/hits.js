const Hit = require('../models/Hit')

exports.createHit = async (req, res) => {
	try {
		const { companyName, url, role, type, contact } = req.body

		// @@@ TODO(ivelez): Detect duplicates before adding a new hit to the database.

		const newHit = {
			userId: req.user._id,
			dateAddedToSheet: Date.now(),
			companyName,
			url,
			role,
			type,
			contact,
		}

		const hitAddedToDB = await Hit.create(newHit)

		res.status(200).json(hitAddedToDB)
	} catch (error) {
		console.error(error)
		res.json(false)
	}
}

exports.getAllHits = async (req, res) => {
	const hits = await Hit.find()
	const count = await Hit.countDocuments()

	if (hits.length === 0) {
		return res.json({ message: 'No hits found' })
	}

	res.json({ count, hits })
}

exports.getHit = async (req, res) => {
	const { id } = req.params
	const hit = await Hit.findById(id)

	if (hit) {
		res.json(hit)
	} else {
		res.json({ message: 'No Hit was found with that id' })
	}
}

exports.updateHit = async (req, res) => {
	const { id } = req.params
	const hit = await Hit.findByIdAndUpdate(id, req.body, {
		new: true,
		runValidators: true,
	})

	res.json(hit)
}

exports.deleteHit = async (req, res) => {
	const { id } = req.params
	const hit = await Hit.findById(id)

	if (hit) {
		hit.remove()
		res.json(true)
	} else {
		res.json({ message: 'No Hit was found with that id' })
	}
}
