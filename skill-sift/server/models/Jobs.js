const { Schema, model } = require('mongoose');

const jobsSchema = new Schema({
    jobId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    type: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
});

const Jobs = model('Jobs', jobsSchema);

module.exports = Jobs;