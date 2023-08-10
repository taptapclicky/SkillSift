import { gql } from '@apollo/client';

export const GET_PROFESSIONAL = gql`
    query getProfessional($id: ID!) {
        getProfessional(id: $id) {
            _id
            name
            username
            location {
                city
                country
            }
            reviews {
                reviewId
                content
                rating
                user {
                    _id
                    name
                }
            }
            skills {
                skillId
                skill
            }
            jobs {
                jobId
                type
                description
            }
        }
    }
`;

export const GET_USER = gql`
    query getUser($id: ID!) {
        getUser(id: $id) {
            _id 
            name
            username
            location {
                city
                country
            }
            jobs {
                jobId
                type
                description
            }
        }
    }
`;

export const GET_ALL_PROFESSIONALS = gql`
    query getAllProfessionals {
        getAllProfessionals {
            _id
            name
            username
            location {
                city
                country
            }
            reviews {
                reviewId
                content
                rating
                user {
                    _id
                    name
                }               
            }
            skills {
                skillId
                skill
            }
            jobs {
                jobId
                type
                description
            }
        }
    }
`;

export const GET_ALL_USERS = gql`
    query getAllUsers {
        getAllUsers {
            _id
            name
            username
            location {
                city
                country
            }
            jobs {
                jobId
                type
                description
            }
        }
    }
`;

export const ME_USER = gql`
    query meUser {
        meUser {
            _id 
            name
            username
            location {
                city
                country
            }
            jobs {
                jobId
                type
                description
            }
        }
    }
`;

export const ME_PROFESSIONAL = gql`
    query meProfessional {
        meProfessional {
            _id
            name
            username
            location {
                city
                country
            }
            reviews {
                reviewId
                content
                rating
                user {
                    _id
                    name
                }
            }
            skills {
                skillID
                skill
            }
            jobs {
                jobId
                type
                description
            }
        }
    }
`;