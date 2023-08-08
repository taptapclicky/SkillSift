const { signToken } = require('../utils/auth')
const { User } = require('../models');


const totalUsers = async () => {
    const numberOfUsers = await User.aggregate().count('userCount');
    return totalUsers;
}

module.exports = {
    async getUsers(req, res) {
        try {
            const users = await User.find();
            const userObj = {
                users,
                totalUsers: await totalUsers(),
            };
            res.json(userObj);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },

    async getSingleUser(req, res) {
        try {
            const user = await User.findOne({ _id: req.params.userId });
            if (!user) {
                return res.status(404).json({ message: 'No User with that ID'});
            }
            res.json(user)
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },

    async createUser(req, res) {
        try {
            const user = await User.create(req.body);
            const token = signToken(user);
            res.json({ token, user });
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },

    async deleteUser(req, res) {
        try {
            const user = await User.findOneAndRemove({ _id: req.params.userId });
            if (!user) {
                return res.status(404).json({ message: 'No User with that ID'});
            }
            res.json({ message: 'User deleted successfully' });
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },

    async updateUser(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $set: req.body },
                { runValidators: true, new: true});
            if (!user) {
                return res.status(404).json({ message: 'No User with that ID.'});
            }
            res.json(user);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },

    async createJob(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $addToSet: {jobs: { jobId: req.params.jobId }}},
                { runValidators: true, new: true }
            );
            if (!user) {
                return res.status(404).json({ message: 'No jobs with that ID'});
            }
            res.json(user)
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },

    async deleteJob(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $pull: {jobs: { jobId: req.params.jobId }}},
                { runValidators: true, new: true }
            );
            if (!user) {
                return res.status(404).json({ message: 'No jobs with that ID'})
            }
            res.json(user);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },

};