// import ENV
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// nodejs express configure
const app = express();
const port = process.env.API_SERVER_PORT || 4500;
const dbUrl = "mongodb://" +
    process.env.DB_USER + ":" + process.env.DB_PASSWORD +
    "@" + process.env.DB_HOST + ":" + process.env.DB_PORT + "/announce-dju";

console.log(dbUrl);

// body-parser configure
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// mongoose configure
mongoose.Promise = global.Promise;
mongoose.connect(dbUrl, { useNewUrlParser: true })
    .then(() => console.log('Successfully connected to mongodb'))
    .catch(e => console.error(e));

app.use('/api/posts', require('./api/posts'));
app.use('/api/tags', require('./api/tags'));

app.listen(port, () => console.log('Server listening now on port ' + port));
