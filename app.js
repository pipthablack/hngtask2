const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 3000;
const route = require('./routes/person');
const dotenv = require('dotenv');


const app = express();
app.use(cors());
app.use(express.json());



const connectDB = require('./config/db.js');

// load config
dotenv.config({ path: './config/config.env' });

connectDB();

// Routes
app.use('/api', require('./routes/person'));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});