const mongoose = require('mongoose');
const Schema = mongoose.Schema;
/*
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
const payment = mongoose.model('payment', paySchema);
*/

const accSchema = new Schema({
    email: {
        type: String,
        require: true
    },
    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    booked: {
        type: [String],
    },
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
const account = mongoose.model('account', accSchema);


module.exports= account;