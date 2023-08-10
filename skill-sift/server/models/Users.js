const { Schema, model } = require('mongoose');
const jobsSchema = require('./Jobs');
const locationSchema = require('./Location');

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: false,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    jobs: [jobsSchema],
    location: locationSchema,
});

const User = model('User', userSchema);

module.exports = User;
