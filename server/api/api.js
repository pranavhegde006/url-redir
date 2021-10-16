const express = require('express');
const route = express();

route.get('/', (req, res) => {
    res.send("hello, this is API");
})

route.get('/create/?:originalURL', (req, res) => {
    var query = req.params.originalURL;
    escape(query);
    res.send(unescape(query));
})

module.exports = route;