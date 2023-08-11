const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        name: String!
        username: String!
        location: Location!
        jobs: [Job]
    }
    
    type Professional {
        _id: ID!
        name: String!
        username: String!
        location: Location!
        jobs: [Job]
        skills: [Skill]
        reviews: [Review]
    }

    type Location {
        city: String
        country: String
    }
    
    type Skill {
        skillId: ID!
        skill: String!
    }

    type Review {
        reviewId: ID!
        content: String!
        rating: Float!
        user: User
        professional: Professional
    }
    
    type Job {
        jobId: ID!
        type: String!
        description: String!
        user: User
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        meUser: User
        meProfessional: Professional
        getProfessional(id: ID!): Professional
        getAllProfessionals: [Professional]
        getUser(id: ID!): User
        getAllUsers: [User]
    }

    input SkillInput {
        skill: String!
    }

    input ReviewInput {
        content: String!
        rating: Float!
    }

    input JobInput {
        type: String!
        description: String!
    }

    input UserInput {
        name: String!
        username: String!
        location: LocationInput!
    }

    input ProfessionalInput {
        name: String!
        username: String!
        location: LocationInput!
    }

    input LocationInput {
        city: String
        country: String
    }

    type Mutation {
        createProfessional(
            name: String!
            username: String!
            location: LocationInput!
            reviews: [ReviewInput]
            skills: [SkillInput]
            jobs: [JobInput]
        ): Professional
        createUser(
            name: String!
            username: String!
            location: LocationInput!
            jobs: [JobInput]
        ): User
        addSkill(skill: SkillInput!): Skill
        createJob(job: JobInput!): Job
        postReview(professionalId: ID!, review: ReviewInput!): Review
    }
`;

module.exports = typeDefs;