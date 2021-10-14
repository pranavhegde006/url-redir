const express = require('express');
const app = express();
const connectDB = require('./db/connection');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json({extended: false}));

connectDB();

app.use('/', require('./api/redir'));

app.use('/api', require('./api/api'));


const PORT = 5000 || process.env.PORT;
app.listen(PORT, ()=>{
    console.log(`Listening on PORT ${PORT}`)
})
