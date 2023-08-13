const { AuthenticationError } = require('apollo-server-express')
const { Professional, User, Skill, Job, Review } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        getProfessional: async (parent, { id }) => {
            return Professional.findById(id);
        },
        getAllProfessional: async () => {
            return Professional.find();
        },
        getUser: async (parent, { id }) => {
            return User.findById(id);
        },
        getAllUsers: async () => {
            return User.find();
        },
        meUser: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id}).select('-__v -password');
                return userData;
            }
            throw new AuthenticationError('No user found with these credentials');
        },
        mePro: async (parent, args, context) => {
            if (contex.user) {
                const userData = await Professional.findOne({ _id: context.user._id}).select('-__v -password');
                return userData;
            }
            throw new AuthenticationError('No professional found with these credentials');
        },
    },
    Mutation: {
        createUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            return { token, user };
        },
        createProfessional: async (parent, args) => {
            const pro = await Professional.create(args);
            return pro;
        },
        addSkill: async (parent, { skill }) => {
            const newSkill = await Skill.create(skill);
            return newSkill;
        },
        createJob: async (parent, { job }) => {
            const newJob = await Job.create(job);
            return newJob;
        },
        postReview: async (parent, { professionalId, review }, context) => {
            if (!context.user) {
                throw new AuthenticationError('Must be signed in');
            }
            const professional = await Professional.findById(professionalId);
            if (!professional) {
                throw new AuthenticationError('Professional not found');
            }
            const newReview = new Review(review);
            professional.reviews.push(newReview);
            await professional.save();

            return newReview;
        },
        login: async (parent, { username, password }) => {
            const user = await User.findOne({ username });

            if (!user || !user.validatePassword(password)) {
                throw new AuthenticationError('Invalid username or password');
            }
            const token = signToken(user);
            return { token, user };
        }
    }
}

module.exports = resolvers
