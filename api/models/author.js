const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    dob: {
        type:Date,
        required:true
    }
});

module.exports = mongoose.model('Author', schema) 