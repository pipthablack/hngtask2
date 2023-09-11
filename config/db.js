const mongoose = require('mongoose');
const dotenv = require('dotenv');
require('dotenv').config();


const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://crudapp:Chinonso@crudapp.x8nzcqd.mongodb.net/', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            
        });
        console.log(`Mongo DB Connected: ${conn.connection.host}`);
    } catch(err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB;