const express = require('express');
const app = express();
const path = require('path');
const methoOverride = require('method-override');
const mongoose = require('mongoose');
const TODO = require('./Models/task');

mongoose.connect('mongodb://localhost:27017/todo', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
	console.log("DataBase is Connected!!");
})
.catch(err => {
	console.log("Error Occured");
	console.log(err);
})

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded( { extended: true } ));
app.use(express.json());
app.use(methoOverride('_method'))

app.get('/tasks',async(req,res) =>{
	const data = await TODO.find({})
	console.log(data)
	res.render('index', {data});
})

app.get('/tasks/newtasks', (req, res) => {
	res.render('newtasks')
})

app.post('/tasks', async (req,res) =>{
	const data = req.body;
	const newData = new TODO(data);
	await newData.save();
	console.log(newData);
	res.redirect(`/tasks`)
})

app.get('/tasks/:id', async(req, res)=> {
	const { id } = req.params;
	const DATA = await TODO.findById(id)
	res.render('show', { DATA })
})

app.delete('/tasks/:id', async(req, res) =>{
	const { id } = req.params;
	const deleteTask = await TODO.findByIdDelete(id)
	res.redirect(`/tasks`);
})

app.listen(3000, () => {
	console.log('On Port 3000!!!!!')
})