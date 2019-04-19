require('dotenv').config();

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const getInfoRouter = require('./routes/getinfo');
const accessDatabase = require('./routes/accessdatabase');

const app = express();

const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, "../client/build")));
app.use(bodyParser.json());

app.use('/api', getInfoRouter);
app.use('/db', accessDatabase);

app.listen(port, () => console.log(`App is running on port ${port}`));
