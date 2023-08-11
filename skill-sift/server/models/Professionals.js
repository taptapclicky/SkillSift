const { Schema, model } = require('mongoose');

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
        city: {
            type: String,
            required: true,
        },
        country: {
            type: String,
            required: true,
        },
    },
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Reviews'
        },
    ],
    skills: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Skills'
        },
    ],
    jobs: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Job',
        },
    ],
});

const Professional = model('Professional', proSchema);

module.exports = Professional;