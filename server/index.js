const express = require('express');
const app = express();
const cors = require('cors');
const logger = require('morgan');
const pool = require('./db');
const PORT = 5000;

//MIDDLEWARE

app.use(cors());
app.use(logger('dev'));
app.use(express.json());

//USER ROUTES//

//create a user

//get all users

//get all a user

//update a user

//delete a user

//Class ROUTES//

//create a class

//get all classes

//get a class

//update a class

//delete a class

app.listen(PORT, () => {
    console.log(`server has started on port ${PORT}`);
});
