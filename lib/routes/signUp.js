'use strict';

const express = require('express');
const cors = require('cors');
const app = express();
const router = express.Router();
const { UserModel } = require('../auth/models'); // get UserModel function from auth/models/index.js

app.use(express.json());
app.use(cors());



router.post('/signup', create);

// create a User on Post to /signup

async function create(req, res, next) {
  let { username, password } = req.body;

  // let encryptedPass = await bcrypt.hash(password, 10);

  // encrypt the password, sore it in the database;
  // let newUser = await User.create({ username, password: encryptedPass});
  let newUser = await UserModel.create({ username, password }); // this will trigger our beforeCreate Hook.

  let response = {
    username: newUser.username,
    id: newUser.id,
  };

  res.send(response);
}