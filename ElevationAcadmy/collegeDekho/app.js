import mongoose from 'mongoose';
const express = require('express');
var cors = require('cors')

// running express library and creating an instance
const app = express();


// adding middleware to parse body of the incoming requests
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors())

mongoose.connect(
    "mongodb://localhost:27017/test",
    () => console.log("db Connected................")
);

app.listen(5000, () => {
    console.log(`App is running on port ${5000}`);
});



module.exports = app;