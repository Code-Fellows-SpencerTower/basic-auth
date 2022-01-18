'use strict';

// Exports an express app/server and a start method
const express = require('express');
// const { Sequelize, DataTypes } = require('sequelize');
// const bcrypt = require('bcrypt');
// const base64 = require('base-64');
const signUpRoute = require('./routes/signUp.js');
const app = express();

app.use(express.json());
app.use(signUpRoute);




module.exports = {
  start: (port) => {
    app.listen(port, () => {
      console.log('Server is running');
    });
  },
  app,
};