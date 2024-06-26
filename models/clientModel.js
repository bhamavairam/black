const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema( {
    name: {
        type: String,
        required: true,
    },
    owner: {
        type: String,
        required: false
    },
    region: {
        type: String,
        required: false
    },
    country: {
        type: String,
        required: false
    },
    city: {
        type: String,
        required: false
    },
    remarks: {
        type: String,
        required: true
    }
});

const Client = mongoose.model( 'client', clientSchema);

module.exports = Client;
