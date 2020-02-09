//import express
const express = require('express');

//import database
const Users = require('../models/users-model');

// const restricted = require('../middleware/restricted.js');

//define the Router
const router = express.Router();

//make a constant reply for 404 and 500
const sendErr = (msg, res) => {
    res.status(500).json( { errorMessage: `${msg}` })
};
const sendMissingID = (res) => {
    res.status(404).json({ errorMessage: 'The post with the specified ID does not exist.' });
};

//make CRUD endpoints
//get request
router.get('/', (req, res) => {
    Users
    .get()
    .then( patient => {
        res.status(200).json(patient);
    })
    .catch( err => {
        return sendErr( 'patient information is unavailable at this time', res );
    })
});

router.put('/', (req, res) => {
    const ID = req.params.id;
    const {userName, password, doctor} = req.body;
    const user = {userName, password, doctor};

    if(!userName || !password) {
        return res.status(400).json({error: 'Please provide the Users new info'})
    }
    Users
    .insert()
    .then()
    .catch(err => {
        return sendErr("Could not create new account please try again", res)
    })
})

//export
module.exports = router;