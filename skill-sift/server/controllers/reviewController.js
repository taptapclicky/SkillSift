const { Reviews } = require('../models');

module.exports = {
    async getReviews(req, res) {
        try {
            const reviews = await Reviews.find();
            res.json(reviews);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },

    async getSingleReview(req, res) {
        try {
            const review = await Reviews.findOne({ _id: req.params.reviewId });
            if (!review) {
                return res.status(404).json({ message: 'No review with this ID'});
            }
            res.json(review);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },

    async createReview(req, res) {
        try {
            const review = await Reviews.create(req.body);
            res.json(review);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
    
    async deleteReview(req, res) {
        try {
            const review = await Reviews.findOneAndRemove({ _id: req.params.reviewId });
            if (!review) {
                return res.status(404).json({ message: 'No review with this ID'});
            }
            res.json({ message: 'Review successfully deleted'});
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
}