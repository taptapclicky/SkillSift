import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        name
        username
      }
    }
  }
`;

export const CREATE_USER = gql`
  mutation createUser($name: String!, $username: String!, $location: LocationInput!) {
    createUser(name: $name, username: $username, location: $location) {
      _id
      name
      username
      location {
        city
        country
      }
    }
  }
`;

export const CREATE_PROFESSIONAL = gql`
    mutation createProfessional($name: String!, $username: String!, $location: LocationInput!) {
        createProfessional(name: $name, username: $username, location: $location) {
            _id
            name
            username
            location {
                city
                country
            }
        }
    }
`;

export const ADD_SKILL = gql`
  mutation addSkill($skill: SkillInput!) {
    addSkill(skill: $skill) {
      skillId
      skill
    }
  }
`;

export const CREATE_JOB = gql`
  mutation createJob($job: JobInput!) {
    createJob(job: $job) {
      jobId
      type
      description
    }
  }
`;

export const POST_REVIEW = gql`
  mutation postReview($professionalId: ID!, $review: ReviewInput!) {
    postReview(professionalId: $professionalId, review: $review) {
      reviewId
      content
      rating
      professional {
        _id
        name
      }
      user {
        _id
        name
      }
    }
  }
`;
