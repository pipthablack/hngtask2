const mongoose = require('mongoose');
require('dotenv').config();

// Access and log the MONGO_URI

const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://crudappnew:chinonso@cluster0.txfnlpu.mongodb.net',{
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