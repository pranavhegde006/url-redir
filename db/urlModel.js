const mongoose = require('mongoose');

const urlSchema = mongoose.Schema({
    originalURL:{
        type:String,
        required: true
    },
    newURL:{
        type:String,
        required: true
    }
});

let urlschema = mongoose.model('urlSchema', urlSchema);

module.exports = urlschema;
