const router = require('express').Router();
const {
    getReviews,
    getSingleReview,
    createReview,
    deleteReview,
} = require('../../controllers/reviewController');

router.route('/').get(getReviews).post(createReview);

router
    .route('/:reviewId')
    .get(getSingleReview)
    .delete(deleteReview);

module.exports = router;