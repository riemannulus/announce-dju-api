import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

// import ENV
dotenv.config();

// nodejs express configure
const app = express();
const port = process.env.API_SERVER_PORT || 4500;

// body-parser configure
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// mongoose configure
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_URI, { useMongoClient: true })
    .then(() => console.log('Successfully connected to mongodb'))
    .catch(e => console.error(e));

app.listen(port, () => console.log('Server listening now on port ${port}'));
