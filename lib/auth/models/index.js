'use strict';

const { Sequelize, DataTypes } = require('sequelize');


// Sequelize is a Constructor from the Sequelize library
// DataType = object that lets you define data types to be stored in SQL - SQL has its own specific data types
// Heroku will do this automatically:
const POSTGRES_URI = process.env.POSTGRES_URI || 'sqlite:memory';

// userSchema is a function
const userSchema = require('./user.schema.js');

// create connection instance singleton - initialize db
let db = new Sequelize(POSTGRES_URI); // takes string, connects us to a running db
// string will change in production - 'squlite' only for testing/development environments
// like a URL - points to something running
// protuction: postgresql://localhost:5432@username:password/dbname

// can perform any CRUD we want on our User table
const UserModel = userSchema(db, DataTypes);

// can use 'sqlite:' if just using in testing / development environment

module.exports = {
  db,
  UserModel,
};