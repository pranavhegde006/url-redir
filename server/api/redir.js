const express = require('express');
const route = express();

const path = require('path');
const bodyParser = require('body-parser');
const urlSchema = require('../db/models/urlModel');

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



route.get('/get/:newURL', async (req, res) => {
    urlSchema.find({newURL: req.params.newURL}, (err, data)=>{
        if(err){
            throw err;
        }
        else{
            if(data.length == 0){
                res.sendFile(path.join(__dirname, './../../public/templates/error.html'));
            }
            else{
                res.redirect(data[0].originalURL);
            }
        }
    })
})


module.exports = route;



