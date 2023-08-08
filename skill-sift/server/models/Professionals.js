const { Schema, model } = require('mongoose');
const skillsSchema = require('./Skills');
const reviewsSchema = require('./Reviews');
const jobsSchema = require('./Jobs');

const proSchema = new Schema({
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
    reviews: [reviewsSchema],
    skills: [skillsSchema],
    jobs: [jobsSchema],
});

const Professional = model('Professional', proSchema);

module.exports = Professional;