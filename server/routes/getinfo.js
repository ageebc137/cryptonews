const express = require('express');
const axios = require('axios');

const router = express.Router();

router.get('/getnews', (req,res) => {
    axios.get("https://newsapi.org/v2/everything?q=blockchain%bitcoin&apiKey=96bd39f263db40a993f011c4b2287661&sources=crypto-coins-news")
    .then((response) => {
      res.send(response.data);
    });
});

router.get('/getprice', (req, res) => {
    axios.get("https://api.coindesk.com/v1/bpi/currentprice.json")
        .then((response) => {
          res.send(response.data);
    });
});

module.exports = router;