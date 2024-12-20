const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const eveSchema = new Schema({
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    date: {
        type: String,
        require: true
    },
    location: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    small_description: {
        type: String,
    },
    user:{
        type:String,
    },
    cost:{
        type: String,
    }, 
    paymentExist:{
        type: String,
    }
}, { timestamp: true });
const event = mongoose.model('event', eveSchema);

module.exports= event;