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
    User.findByCredentials(body.username, body.password).then((user) => {
        res.send(user);
    })
    .catch((err) => res.status(400).send(err));
});

router.post('/addbookmark', (req, res) => {
    let username = req.body.username, bookmark = req.body.bookmark;
    User.findOne({ username }).then((user) => {
        return user.addBookmark(bookmark);
    })
    .then((response) => {
        res.send(response);
    })
    .catch((err) => {
        res.status(400).send(err);
    })
});

router.post('/removebookmark', (req, res) => {
    let username = req.body.username, bookmark = req.body.bookmark;
    console.log(username, bookmark);
    User.findOne({username}).then((user) => {
        console.log(user);
        return user.removeBookmark(bookmark);
    })
    .then((response) => {
        res.send(response);
    })
    .catch((err) => {
        res.status(400).send(err);
    })
});


module.exports = router;
