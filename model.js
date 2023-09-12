const mongoose = require('mongoose');

// Define the schema for the "person" resource
const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  
  email : { 
    type: String,
    required: true,
    unique: true,
  },
  
  // Add other fields as needed
},{
    versionKey:false
});

// Create a Person model based on the schema
module.exports = mongoose.model('Person', schema);

 