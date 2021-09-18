const multer = require('multer')
const path = require('path')

// @@@ ivel: I am leaving multer because I don't know if we need it for file upload (the spreadsheet).
module.exports = multer({
	storage: multer.diskStorage({}),
	fileFilter: (req, file, cb) => {
		let ext = path.extname(file.originalname)
		if (ext !== '.jpg' && ext !== '.jpeg' && ext !== '.png') {
			cb(new Error('File type is not supported'), false)
			return
		}
		cb(null, true)
	},
})
