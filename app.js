var express = require('express');
// var bodyParser = require('body-parser');
// app.use(bodyParser.json());
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
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