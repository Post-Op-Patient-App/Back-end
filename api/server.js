const express = require('express');
const cors = require('cors');
require('dotenv').config();

//import routes 
const auth = require('./auth/auth-router');
const user = require('./routes/users-routers');
const patients = require('./routes/patients-router');

const server = express();

server.use(express.json());
server.use(cors());

//setup routes
server.use('/api/auth', auth);
server.use('/api/user', user);
server.use('/api/patients', patients);

//sanity check
server.get('/', (req, res) => {
  res.send(`<h2>Just testing</h2>`)
})

module.exports = server;
