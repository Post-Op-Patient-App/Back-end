//import express
const express = require('express');

//import database
const Patients = require('../models/patients-models');
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

//get request
router.get('/', (req, res) => {
    Patients
    .get()
    .then( patient => {
        res.status(200).json(patient);
    })
    .catch( err => {
        return sendErr( 'patient information is unavailable at this time', res );
    })
});


//get patient by ID
router.get('/:id', (req, res) => {
    const ID = req.params.id;
    Patients
    .getById(ID)
    .then( patient => {
        if( patient === undefined ) {
            return sendMissingID(res);
        }
        return res.status(200).json(patient);
    })
    .catch( err => {
        return sendErr( 'patient information is unavailable at this time', res );
    })
});

//new patient
router.post('/:id', (req, res) => {
    const ID = req.params.id;
    Patients
    .getById(ID)
    .then( patient => {
        if(!patient){
            return sendMissingID(res);
        }
    
        Vitals
        .insertVitals(req.body)
        .then( patient => {
        console.log(patient);
        res.status(200).json({
            message: 'patient vitals loaded correctly, congratz!!!'
        });
        })
        .catch( err => {
        //console.log(err)
        return sendErr( 'This function is currently unavailable', res );
        })
    })
    .catch(err => {
        return sendErr( 'patient information is unavailable at this time', res );
    })
})

//update patient
router.put('/:id', (req, res) => {
    //define id 
    const ID = req.params.id
  
    //define req.body
    const { username, password, type, about, skills } = req.body;
    const patient = { username, password, type, about, skills };
  
    //check the req body
    if(!username || !password || !about) { 
      return res.status(400).json({ error: 'Please provide the NEW patient name, password, about section' });
    }
    Patients
    .update(ID, patient)
    .then( patient => {
      //console.log(patient)
      if (patient === undefined) {
        return sendMissing(res);
      }
      else{
        newpatient = { ID, username, password, type, about, skills }
        return res.status(201).json(newpatient);
      }
    })
    .catch( err => {
      return sendError( 'This function is currently unavailable', res );
    })
})

//delete patient 
// router.delete('/:id', (req, res) => {
//     //set id
//     const ID = req.params.id
//     //delete the post
//     Patients
//     .remove(ID)
//     .then( post => { 
//       if (post === undefined) {
//         return sendMissingID(res);
//       }
//       else{
//         return res.status(200).json(post);
//       }
//     })
//     .catch( err => {
//       return sendError( 'This function is currently unavailable', res );
//     })
// })

//export
module.exports = router;