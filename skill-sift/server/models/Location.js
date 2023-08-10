const { Schema, model } = require('mongoose');

const locationSchema = new Schema({
    city: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
});

const Location = model('Location', locationSchema);

module.exports = Location;