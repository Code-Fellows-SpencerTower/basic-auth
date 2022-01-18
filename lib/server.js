'use strict';

// Exports an express app/server and a start method
const express = require('express');
// const { Sequelize, DataTypes } = require('sequelize');
// const bcrypt = require('bcrypt');
// const base64 = require('base-64');
const userRoutes = require('./routes/userRoutes.js');
const app = express();

app.use(express.json());
app.use(userRoutes);




module.exports = {
  start: (port) => {
    app.listen(port, () => {
      console.log('Server is running');
    });
  },
  app,
};