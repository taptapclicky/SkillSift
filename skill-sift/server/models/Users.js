const { Schema, model } = require('mongoose');
const jobsSchema = require('./Jobs');

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
    location: {
        type: Location,
        required: true,
    },
    jobs: [jobsSchema],
});

const User = model('User', userSchema);

module.exports = User;
