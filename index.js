const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);  // a string está no link do mongo do .env  
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error);
});

database.once('connected', () => {
    console.log('Database Conectado');
});

const app = express();
app.use(express.json());

const routes = require('./routes/routes');
app.use('/api', routes);


app.listen(3000, () => {
    console.log('SErver runnig...');
});