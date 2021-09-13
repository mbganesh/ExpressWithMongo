const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    designation:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('staff' , staffSchema);