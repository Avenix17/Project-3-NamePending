const { gql } = require("apollo-server-express");

const typeDefs = gql `
    scalar Date

    type Users {
        _id: ID!
        username: String!
        email: String!
        password: String!
    }
    
    type Events {
        _id: ID!
        eventname: String!
        description: String!
        startdate: Date!
        enddate: Date!
        username: String!
        comments: [Comments]
    }
    
    type Comments {
        _id: ID!
        commentText: String!
        createdAt: Date!
        username: String!
        eventname: String!
    }

    type Auth {
        token: ID!
        users: Users
    }


    # Queries
    type Query {
        getAllUsers: [Users]
        getAllEvents: [Events]
        getOneEvent: [Events]
        getAllComments: [Comments]
    }
    # Mutations
    type Mutation {
        createUser(username: String!, email: String!, password: String!): Auth
        createEvent(eventname: String!, description: String!, startdate: Date!, enddate: Date!): Events
        createComment(commentText: String!, createdAt: Date!, username: String!, eventname: String!): Comments
        deleteEvent(_id: ID!): Events
        login(email: String!, password: String!): Auth
    }
`;


module.exports = typeDefs;