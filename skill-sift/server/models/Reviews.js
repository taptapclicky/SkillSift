const { Schema, model } = require('mongoose');
const { User } = require('./Users');
const { Professional } = require('./Professionals');

const reviewsSchema = new Schema({
    reviewId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    content: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
        default: () => 2.5,
    },
    professional: {
        type: Schema.Types.ObjectId,
        ref: 'Professional',
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User', 
    },
});

const Reviews = model('Reviews', reviewsSchema);

module.exports = Reviews;