require('dotenv').config();

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const getInfoRouter = require('./routes/getinfo');
const accessDatabase = require('./routes/accessdatabase');
const cors = require('cors');

const app = express();

const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, "../client/build")));
app.use(bodyParser.json());
// Use cors() in order to achieve cross origin access with React client.
app.use(cors());

app.use('/api', getInfoRouter);
app.use('/db', accessDatabase);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/public/index.html'));
});

app.listen(port, () => console.log(`App is running on port ${port}`));
