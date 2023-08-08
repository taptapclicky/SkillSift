const {Skills} = require('../models');

module.exports = {
    async getSkills(req, res) {
        try {
            const skills = await Skills.find();
            res.json(skills);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },

    async getSingleSkill(req, res) {
        try {
            const skill = await Skills.findOne({ _id: req.params.skillId });
            if (!skill) {
                return res.status(404).json({ message: 'No skill with that ID'});
            }
            res.json(skill);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },

    async createSkill(req, res) {
        try {
            const skill = await Skills.create(req.body);
            res.json(skill);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },

    async deleteSkill(req, res) {
        try {
            const skill = await Skills.findOneAndRemove({ _id: req.params.skillId });
            if (!skill) {
                return res.status(404).json({ message: 'No skill with that ID'});
            }
            res.json({ message: 'Skill deleted successfully'});
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
}