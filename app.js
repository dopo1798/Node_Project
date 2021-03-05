var express = require('express');
// var bodyParser = require('body-parser');
// app.use(bodyParser.json());
var app = express();
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
app.use(bodyParser.json());
const DB_USER = 'dipika_user';
const PASSWORD = encodeURIComponent('dopo1234');
const DB_URL = `mongodb://${DB_USER}:${PASSWORD}@localhost:27017/nwtonSchool`;
mongoose.connect(DB_URL).then(() => {
    console.log("Database connected successfully");
}).catch((err) => {
    console.log(err);
});
app.get('/start', function(req, res) {
    const responseObj = {
        fn: "dipika",
        ln: "sarkar"
    }
    res.send(responseObj);
});
app.post('/start', function(req, res) {
    // const responseObj = {
    //     fn: "dipika",
    //     ln: "sarkar"
    // }
    console.log(req.body);
    res.send("this is post method");
});

app.listen(3000, 'localhost', function run() {
    console.log('App is running 3000 port');
});