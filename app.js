const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

app.use(express.json());
app.use(cors());

//Import Routes
const employeesRoute = require('./Routes/employees');

app.use('/employees', employeesRoute);

//Routes
app.get('/', (req, res) => {
	res.send('This is Home page');
});

//Connect to DB
mongoose.connect(
	process.env.DB_CONNECTION,
	{ useNewUrlParser: true, useUnifiedTopology: true },
	() => console.log('Connected to DB')
);

app.listen(3000);
