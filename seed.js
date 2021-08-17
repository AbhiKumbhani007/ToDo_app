const mongoose = require('mongoose');
const TODO = require('./Models/task')

mongoose.connect('mongodb://localhost:27017/todo', { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => {
		console.log("DataBase is Connected!!");
	})
	.catch(err => {
		console.log("Error Occured");
		console.log(err);
	})

/* const T = new TODO({
	Task: 'Clean the room',
	Priority: 3
})

T.save().then(t => {
	console.log(T)
})
	.catch(e => {
		console.log(e)
	}) */
const seedtodo = [
	{
		task: 'Clean the room',
		priority: 3
	},
	{
		task: 'water the plants',
		priority: 2
	},
	{
		task: 'complete project',
		priority: 4
	},
	{
		task: 'buy the grocerry',
		priority: 5
	}

]
TODO.insertMany(seedtodo)
	.then(res => {
		console.log(res)
	})
	.catch(e => {
		console.log(e)
	})