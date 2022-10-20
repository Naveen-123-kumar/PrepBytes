import signupRoute from './container/signup/signup.route';
import mongoose from 'mongoose';
import { MongoClient } from 'mongodb';


const express = require('express');
var cors = require('cors')

// running express library and creating an instance
const app = express();

// adding middleware to parse body of the incoming requests
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors())

module.exports = app;

mongoose.connect(
    "mongodb://localhost:27017/test",
    () => console.log("db Connected................")
  );

// const url = 'mongodb://127.0.0.1:27017/students';

// MongoClient.connect(url, (err, db)=>{
// if (err) console.log({err});
// else  console.log('Connection successful>>>>>>>>>>>>>>>>>>>>');
// })


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//localhost:4000
app.get('/', (req, res) => {
    res.send('collegeDekho server is running ')
})


//localhost:4000/signup
app.use('/signup', signupRoute);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
});

