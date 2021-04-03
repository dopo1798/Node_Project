var express = require('express');
// var bodyParser = require('body-parser');
// app.use(bodyParser.json());
var app = express();
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config({ path: './config/config.env' });
const database = require('./database/db.js');
const authRoute = require('./authentication/authRoute');
app.use("/auth", authRoute);
database.connectToDatabase().then(response => {
    console.log("database connected ");
    app.listen(3000, 'localhost', () => {
        // console.log('App is running 3000 port');
        console.log('App is running 3000 port');
    });
}).catch(error => {
    console.log(error);
});