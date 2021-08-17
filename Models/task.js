const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
	task: {
		type: String,
		/* required: true */
	},
	priority: {
		type: Number,
		/* required: true, */
		min: 0,
		max: 5
	}
})

const TODO = mongoose.model('tasks', taskSchema);
module.exports = TODO;