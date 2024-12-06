const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paySchema = new Schema({
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    cardNumber: {
        type: String,
        require: true
    },
    expire: {
        type: String,
        require: true
    },
    cvv: {
        type: String,
        require: true
    }
}, { timestamp: true });
const event = mongoose.model('event', eveSchema);

module.exports= event;