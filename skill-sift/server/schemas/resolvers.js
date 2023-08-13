const { AuthenticationError } = require('apollo-server-express')
const { Professional, User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
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
        createUser: async (parent, { name, username, location }) => {
            const user = await User.create({ name, username, location });
            const token = signToken(user);
            return { token, user };
        },
        createProfessional: async (parent, { name, username, location }) => {
            const pro = await Professional.create({ })
        }
    }
}

module.exports = resolvers
