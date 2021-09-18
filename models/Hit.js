const mongoose = require('mongoose')

const HitSchema = new mongoose.Schema(
	{
		userId: {
			type: String,
			required: [true, 'Please enter a user that this hit is related to.'],
			ref: 'User',
		},

		companyName: {
			type: String,
			trim: true,
			required: [true, 'Please enter a company name.'],
		},

		dateAddedToSheet: {
			type: Date,
			required: [true, 'Please enter a date this hit was added to the sheet.'],
			// This field is tricky because people have different
			// ways of writing dates (can vary by country) this can
			// be an issue when importing from google sheets, in
			// the mean time, we can set the default to be the date
			// the hit was added to the database using the line below.
			// Default: Date.now()
		},

		url: {
			type: String,
			trim: true,
			match:
				/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/gm,
			required: [true, 'Please enter the url where the job was found.'],
		},

		role: {
			// this can be named position as well
			type: String,
			required: [true, 'Please enter the name of the role.'],
			trim: true,
		},

		type: {
			type: String,
			required: [true, 'Please enter the type of the job.'],
			enum: ['Full Time', 'Part Time', 'Remote', 'Contract', 'Freelance'],
		},

		contact: {
			name: {
				type: String,
				required: [
					true,
					'Please enter the name of the contact at the company.',
				],
				trim: true,
			},

			position: {
				type: String,
				required: [
					true,
					'Please enter the position of the contact on the company.',
				],
			},

			email: {
				type: String,
				match:
					/ (([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/gm,
				trim: true,
				// I think this field is not required because we are not guaranteed to always
				// have an email, same with the socials below.
			},

			contactMessage: {
				type: String,
				required: [
					true,
					'Please enter the message you sent to the contact at the company.',
				],
				default: '', // Initialize it as an empty array because the sheet does not have a message column.
			},

			socials: {
				twitter: {
					url: {
						type: String,
						trim: true,
						match:
							/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/gm,
					},

					dmsOpened: {
						// this property can have a different name like messages, privateMessages etc.
						type: Boolean,
						default: false,
					},
				},

				linkedin: {
					url: {
						type: String,
						trim: true,
						match:
							/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/gm,
					},

					dmsOpened: {
						type: Boolean,
						default: false,
					},
				},

				angellist: {
					url: {
						type: String,
						trim: true,
						match:
							/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/gm,
					},

					// dmsOpened if applicable.
				},

				// More socials...
			},

			application: {
				applied: {
					type: Boolean,
					default: false,
				},

				sent: {
					type: Date,
				},

				coffeeChat: {
					type: Boolean,
					default: false,

					date: {
						type: Date,
					},
				},

				thankYou: {
					type: Boolean,
					default: false,
				},

				followUp: {
					type: Boolean,
					default: false,
				},

				interviewDate: {
					type: Date,
				},

				// notes, could be a new model
			},
		},
	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model('Hit', HitSchema)
