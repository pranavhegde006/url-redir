const express = require('express');
const route = express();

const path = require('path');
const bodyParser = require('body-parser');
const urlSchema = require('../db/models/urlModel');

route.get('/', (req, res)=>{
    res.render(path.join(__dirname, './../../public/templates/index.html'), {name: ''});
})



route.post('/', (req, res) => {
    let obj = {};
    obj.originalURL = req.body.originalURL;
    obj.newURL = req.body.newURL;
    urlSchema.find({newURL: req.body.newURL}, (err, data)=>{
        if(err){
            throw err;
        }
        else{
            if(data.length == 0){
                let urlObj = new urlSchema(obj);
                urlObj.save();
                res.render(path.join(__dirname,'./../../public/templates/index.html'), {name: "Alias successfully created!"});
            }
            else{
                res.render(path.join(__dirname, './../../public/templates/index.html'), {name: "ALIAS already in use. \nPlease enter a different alias!"})
            }
        }
    })
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



