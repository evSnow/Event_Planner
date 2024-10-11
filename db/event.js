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
    Date: {
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
    }
}, { timestamp: true });
const event = mongoose.model('event', eveSchema);

module.exports= event;