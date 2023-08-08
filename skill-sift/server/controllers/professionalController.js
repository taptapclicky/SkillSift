const { ObjectId } = require('mongoose').Types;
const { Professional } = require('../models');

const totalProfessionals = async () => {
    const numberOfPros = await Professional.aggregate().count('proCount');
    return totalProfessionals;
}

module.exports = {
    async getProfessionals(req, res) {
        try {
            const pros = await Professional.find();
            const proObj = {
                pros,
                totalProfessionals: await totalProfessionals(),
            };
            res.json(proObj);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },

    async getSingleProfessional(req, res) {
        try {
            const pro = await Professional.findOne({ _id: req.params.professionalId });
            if (!pro) {
                return res.status(404).json({ message: 'No Professional with that ID'});
            }
            res.json(pro)
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },

    async createProfessional(req, res) {
        try {
            const pro = await Professional.create(req.body);
            res.json(pro);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },

    async deleteProfessional(req, res) {
        try {
            const pro = await Professional.findOneAndRemove({ _id: req.params.userId });
            if (!pro) {
                return res.status(404).json({ message: 'No Professional with that ID'});
            }
            res.json({ message: 'Professional deleted successfully' });
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },

    async updateProfessional(req, res) {
        try {
            const pro = await Professional.findOneAndUpdate(
                { _id: req.params.professionalId },
                { $set: req.body },
                { runValidators: true, new: true});
            if (!pro) {
                return res.status(404).json({ message: 'No Professional with that ID.'});
            }
            res.json(pro);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },

    async addJob(req, res) {
        try {
            const pro = await Professional.findOneAndUpdate(
                { _id: req.params.professionalId },
                { $addToSet: {jobs: { jobId: req.params.jobId }}},
                { runValidators: true, new: true }
            );
            if (!pro) {
                return res.status(404).json({ message: 'No jobs with that ID'});
            }
            res.json(pro)
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },

    async removeJob(req, res) {
        try {
            const pro = await Professional.findOneAndUpdate(
                { _id: req.params.professionalId },
                { $pull: {jobs: { jobId: req.params.jobId }}},
                { runValidators: true, new: true }
            );
            if (!pro) {
                return res.status(404).json({ message: 'No jobs with that ID'})
            }
            res.json(pro);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },

    async addSkill(req, res) {
        try {
            const pro = await Professional.findOneAndUpdate(
                { _id: req.params.professionalId },
                { $addToSet: {skills: { skillId: req.params.skillId }}},
                { runValidators: true, new: true }
            );
            if (!pro) {
                return res.status(404).json({ message: 'No skills with that ID'});
            }
            res.json(pro)
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },

    async removeSkill(req, res) {
        try {
            const pro = await Professional.findOneAndUpdate(
                { _id: req.params.professionalId },
                { $pull: {skills: { skillId: req.params.skillId }}},
                { runValidators: true, new: true }
            );
            if (!pro) {
                return res.status(404).json({ message: 'No skills with that ID'})
            }
            res.json(pro);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },

    async createReview(req, res) {
        try {
            const pro = await Professional.findOneAndUpdate(
                { _id: req.params.professionalId },
                { $addToSet: {reviews: { reviewId: req.params.reviewId }}},
                { runValidators: true, new: true }
            );
            if (!pro) {
                return res.status(404).json({ message: 'No reviews with that ID'});
            }
            res.json(pro)
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },

    async deleteReview(req, res) {
        try {
            const pro = await Professional.findOneAndUpdate(
                { _id: req.params.professionalIdId },
                { $pull: {reviews: { reviewId: req.params.reviewId }}},
                { runValidators: true, new: true }
            );
            if (!pro) {
                return res.status(404).json({ message: 'No reviews with that ID'})
            }
            res.json(user);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
};