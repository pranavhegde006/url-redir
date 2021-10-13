const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    res.render('index');
})



const PORT = 5000 || process.env.PORT;
app.listen(PORT, ()=>{
    console.log(`Listening on PORT ${PORT}`)
})
