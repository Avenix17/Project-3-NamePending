import { gql } from '@apollo/client';

export const LOGIN = gql `
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
        token
        user {
            _id
        }
        }
    }
`;

export const createUsers = gql `
    mutation createUsers(
        $username: String!
        $email: String!
        $password: String!
    ) {
        createUsers(
            username: $username
            email: $email
            password: $password
        ) {
            token
            user {
                _id
            }
        }
    }
`;

export const createEvent = gql `
    mutation createEvent(
        $eventname: String!
        $description: String!
        $startdate: Date!
        $enddate: Date!
    ) {
        createEvent(
            eventname: $eventname
            description: $description
            startdate: $startdate
            enddate: $enddate
        ) {
            token
            user {
                _id
            }
        }
    }
`;

export const createComment = gql `
    mutation createComment(
        $commentText: String!
        $createdAt: Date!
        $username: String!
        $eventname: String!
    ) {
        createComment(
            commentText: $commentText
            createdAt: $createdAt
            username: $username
            eventname: $eventname
        ) {
            token
            user {
                _id
            }
        }
    }
`;

export const deleteEvent = gql `
    mutation deleteEvent(
        $_id: ID!
    ) {
        deleteEvent(
            _id: $_id
        ) {
            token
            user {
                _id
            }
        }
    }
`;