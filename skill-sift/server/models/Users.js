const { Schema, model } = require('mongoose');

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
        city: {
            type: String,
            required: true,
        },
        country: {
            type: String,
            required: true,
        },
    },
    jobs: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Job',
        },
    ],
});

const User = model('User', userSchema);

module.exports = User;
