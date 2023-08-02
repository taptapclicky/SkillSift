const router = require('express').Router();
const {
  getJob,
  getSingleJob,
  createJob,
  updateJob,
  deleteJob,
  
} = require('../../controllers/jobController');

// /api/videos
router.route('/').get(getJob).post(createJob);

// /api/videos/:videoId
router
  .route('/:jobId')
  .get(getSingleJob)
  .put(updateJob)
  .delete(deleteJob);


module.exports = router;
