const express = require('express');
const app = express();
const connectDB = require('./server/db/connection/connection');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json({extended: false}));

connectDB();

app.use('/', require('./server/api/redir'));

app.use('/api', require('./server/api/api'));


const PORT = 5000 || process.env.PORT;
app.listen(PORT, ()=>{
    console.log(`Listening on PORT ${PORT}`)
})
