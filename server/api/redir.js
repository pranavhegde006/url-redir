const express = require('express');
const route = express();

const path = require('path');
const bodyParser = require('body-parser');
const urlSchema = require('../db/urlModel');
// const urlschema = require('./../db/urlModel');

route.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, './../../public/templates/index.html'));
})

route.post('/', async(req, res) => {
    let obj = {};
    obj.originalURL = req.body.originalURL;
    obj.newURL = req.body.newURL;

    let urlObj = new urlSchema(obj);
    await urlObj.save();
    res.sendFile(path.join(__dirname, './../../public/templates/index.html'));
})


route.get('/get/:newURL', (req, res) => {
    urlSchema.find({newURL: req.params.newURL}, (err, data)=>{
        
        if(err){
            res.sendFile(path.join(__dirname, './../../public/templates/error.html'));
            return console.log(err);
        }
        
        if(!data){
            return res.sendFile(path.join(__dirname, './../public/templates/error.html'));
        }
        
        else{
            res.redirect(data[0].originalURL);
        }
    })
})


module.exports = route;

