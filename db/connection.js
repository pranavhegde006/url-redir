const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async () => {
    await mongoose.connect(process.env.URI, 
        { 
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
    console.log('Connected to the DB');
}

module.exports = connectDB;
