const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
    }
}, { timestamp: true });
const account = mongoose.model('account', accSchema);

module.exports= account;