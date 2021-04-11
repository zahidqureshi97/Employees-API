const mongoose = require('mongoose');

const EmployeeSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	salary: {
		type: Number,
		required: true,
	},
	doB: {
		type: Date,
		required: true,
	},
	createdDate: {
		type: Date,
		default: Date.now,
	},
	updatedDate: {
		type: Date,
		default: Date.now,
	},
	status: {
		type: Boolean,
		required: true,
	},
});

module.exports = mongoose.model('Employees', EmployeeSchema);
