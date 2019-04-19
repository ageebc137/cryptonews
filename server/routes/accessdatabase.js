const express = require('express');
const axios = require('axios');
const mongoose = require('../db/mongoose');
const {User} = require('../models/user');
const _ = require('lodash');

const router = express.Router();

router.get('/register', (req,res) => {
   let body = _.pick(req.body, ['username', 'password']);
   let user = new User(body);
   user.save().then(() => {
       res.send(user);
   })
   .catch((err) => res.status(400).send(err));
});

router.get('/login', (req,res) => {
    let body = _.pick(req.body, ['username', 'password']);
    User.findByCredentials(body.username, body.password).then((user) => {
        res.send(user);
    });
})

// Add router.get('/bookmarks');

module.exports = router;
