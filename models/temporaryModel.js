const mongoose = require('mongoose');

const temporarySchema = new mongoose.Schema( {
    name : {
        type: String,
        required: true,
    },
    data : {
        type: Object,
        required: true
    },
    status: {
        type: String,
        required: true
    }
});

const Temporary = mongoose.model( 'Temp', temporarySchema);

module.exports = Temporary;