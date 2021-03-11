const DB_USER = process.env.DB_USERNAME;
const PASSWORD = encodeURIComponent(process.env.DB_PASSWORD);
const DB_URL = `mongodb://${DB_USER}:${PASSWORD}@localhost:27017/nwtonSchool`;
const mongoose = require('mongoose');

function connectToDatabase() {
    mongoose.connect(DB_URL).then(() => {
        console.log("Database connected successfully");
    }).catch((err) => {
        console.log(err);
    });
}
module.exports = { connectToDatabase };