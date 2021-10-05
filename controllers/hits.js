const Hit = require('../models/Hit')

exports.createHit = async (req, res) => {
	const { companyName, url, role, type, contact } = req.body
	const { name, position, email } = contact

	// @@@ TODO(ivel): Check if a duplicate exists.

	const newHit = {
		userId: req.user._id,
		dateAddedToSheet: Date.now(),
		companyName,
		url,
		role,
		type,
		contact: {
			name,
			position,
			email,
		},
	}

	// @@@ TODO(ivel): Add to database new hit.
}
