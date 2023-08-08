const { gql } = require('epress');

const typeDefs = gql`
    type User {
        _id: ID!
        name: String!
        username: String!
        location: String!
        jobs: [Job]
    }
    
    type Professional {
        _id: ID!
        name: String!
        username: String!
        location: String!
        jobs: [Job]
        skills: [Skill]
        reviews: [Review]
    }
    
    type Skill {
        skillId: ID!
        skill: String!
    }

    type Review {
        reviewId: ID!
        content: String!
        rating: Int!
        user: ID
        professional: ID
    }
    
    type Job {
        jobId: ID!
        type: String!
        description: String!
        user: ID
    }

    type Auth {
        token: ID!
        user: User || professional: Professional
    }

    type Query {
        me: User || Professional
    }

    input SkillInput {
        skillId: ID!
        skill: String
    }

    input ReviewInput {
        reviewId: ID!
        content: String!
        rating: Int!
        user: ID
        professional: ID
    }

    input JobInput {
        jobId: ID!
        type: String!
        description: String!
        user: ID
    }

    type Mutation {
        createUser(username: String!, name: String!, password: String): Auth
        createProfessional(username: String!, name: String!, password: String): Auth
        saveJob()
    }
    `