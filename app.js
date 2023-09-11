const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');


const app = express();
app.use(cors());
app.use(express.json());



const connectDB = require('./config/db.js');

// load config
dotenv.config({ path: './config/config.env' });

connectDB();

// Routes
app.use('/', require('./routes/person'));

app.listen(3000);