const router = require('express').Router();
const {
  getJob,
  getSingleJob,
  createJob,
  updateJob,
  deleteJob,
  
} = require('../../controllers/jobController');

router.route('/').get(getJob).post(createJob);

router
  .route('/:jobId')
  .get(getSingleJob)
  .put(updateJob)
  .delete(deleteJob);


module.exports = router;
