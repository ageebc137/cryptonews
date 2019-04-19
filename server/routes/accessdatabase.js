const express = require('express');
const axios = require('axios');
const mongoose = require('../db/mongoose');
const {User} = require('../models/user');
const _ = require('lodash');

const router = express.Router();

router.get('/register', (req,res) => {
   let body = _.pick(req.body, ['username', 'password']);
   let user = new User(body);
   console.log('hello');
   user.save().then(() => {
       console.log(user, 'bop');
       res.send(user);
   })
   .catch((err) => res.status(400).send(err));
});

module.exports = router;
