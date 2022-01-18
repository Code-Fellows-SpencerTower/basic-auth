'use strict';

// Connect to the database
// Require the 'server' and start it

const { start } = require('./lib/server.js');

// import db from model/index.js
const { db } = require('./lib/auth/models');
const PORT = process.env.PORT || 3000;

// have to initialize db to perform operations on db
db.sync()
  .then(() => start(PORT))
  .catch(err => console.log(err)); // creates and initializes tables before we start the server
