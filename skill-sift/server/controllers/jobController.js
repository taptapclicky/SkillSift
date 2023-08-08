const { Jobs } = require('../models');

module.exports = {
    async getJob(req, res) {
        try {
            const jobs = await Jobs.find();
            res.json(jobs);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
    
    async getSingleJob(req, res) {
        try {
            const job = await Jobs.findOne({ _id: req.params.jobId });
            if (!job) {
                return res.status(404).json({message: 'No job with this ID'});
            }
            res.json(job)
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },

    async createJob(req, res) {
        try {
            const job = await Jobs.create(req.body);
            res.json(job)
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },

    async updateJob(req, res) {
        try {
            const job = await Jobs.findOneAndUpdate(
                { _id: req.params.jobId },
                { $set: req.body },
                { runValidators: true, new: true}
            );
            if (!job) {
                return res.status(404).json({ message: 'No job with this ID'});
            }
            res.json(job);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },

    async deleteJob(req, res) {
        try {
            const job = await Jobs.findOneAndRemove({ _id: req.params.jobId});
            if (!job) {
                return res.status(404).json({message: 'No job with this ID'});
            }
            res.json({ message: 'Job successfully deleted'});
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
}