const express = require('express');
const app = express();
const connectDB = require('./server/db/connection/connection');
const bodyParser = require('body-parser');
const path = require('path');

//JSON parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json({extended: false}));

//Using EJS view engine
app.set('views', path.join(__dirname, './public/templates'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//Connecting to MongoDB atlas
connectDB();

//Middleware for static objects
app.use(express.static('public'));
// app.use('/images', express.static('images')); 

//Route for web version
app.use('/', require('./server/api/redir'));

//Route for API - future prospect
app.use('/api', require('./server/api/api'));


const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`Listening on PORT ${PORT}`)
})
