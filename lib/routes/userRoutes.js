'use strict';

const express = require('express');
const cors = require('cors');
const app = express();
const router = express.Router();
const { UserModel } = require('../auth/models'); // get UserModel function from auth/models/index.js
const bcrypt = require('bcrypt');
// const base64 = require('base-64');
// const basicAuth = require('../auth/basicAuth.js');

app.use(express.json());
app.use(cors());



router.post('/signup', create);
// router.post('/signin', basicAuth, (req, res) => { });

// create a User on Post to /signup
async function create(req, res, next) {

  console.log(req.query);
  let { username, password } = req.query;

  try {
    // encrypt the password:
    password = await bcrypt.hash(password, 10);
    console.log(password);
    // store encrypted password in the database with username:
    let newUser = await UserModel.create({ username, password }); // this will trigger our beforeCreate Hook.

    let response = {
      username: newUser.username,
      id: newUser.id,
    };

    res.status(200).send(response);
  } catch (err) {
    console.log(err);
    res.status(404).send(err);
  }
}

module.exports = router;