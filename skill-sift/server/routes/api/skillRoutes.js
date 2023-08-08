const router = require('express').Router();
const {
    getSkills,
    getSingleSkill,
    createSkill,
    deleteSkill,
} = require('../../controllers/skillsController');

router.route('/').get(getSkills).post(createSkill);

router
    .route('/:skillId')
    .get(getSingleSkill)
    .delete(deleteSkill);

module.exports = router;