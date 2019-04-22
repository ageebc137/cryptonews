const express = require('express');
const axios = require('axios');
const mongoose = require('../db/mongoose');
const {User} = require('../models/user');
const _ = require('lodash');

const router = express.Router();

router.post('/register', (req,res) => {
   let body = _.pick(req.body, ['username', 'password']);
   console.log(body);
   let user = new User(body);
   user.save().then(() => {
       res.send(user);
   })
   .catch((err) => res.status(400).send(err));
});

router.post('/login', (req,res) => {
    let body = _.pick(req.body, ['username', 'password']);
    console.log(body);;
    User.findByCredentials(body.username, body.password).then((user) => {
        res.send(user);
    })
    .catch((err) => res.status(400).send(err));
})

// Add router.get('/bookmarks');

module.exports = router;
