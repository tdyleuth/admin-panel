const express = require('express');
const app = express();
const cors = require('cors');
const logger = require('morgan');
const client = require('./db');
const PORT = 5000;

//MIDDLEWARE

app.use(cors());
app.use(logger('dev'));
app.use(express.json());

//USER ROUTES//

//create a user

app.post('/users', async (req, res) => {
    try {
        const { firstName, lastName, email, useRole } = req.body;
        const newUser = await client.query(
            `INSERT INTO users (firstName,lastName,email,useRole) VALUES($1,$2,$3,$4) ON CONFLICT DO NOTHING RETURNING *;`,
            [firstName, lastName, email, useRole]
        );
    } catch (error) {
        console.error(error.message);
    }
});

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
