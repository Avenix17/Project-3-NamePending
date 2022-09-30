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
    
    # Queries
    type Query {
        getAllUsers: [User]
        getAllEvents: [Events]
        getAllComments: [Comments]
    }
    # Mutations
    type Mutation {
        createUser(username: String!, email: String!, password: String!): User
        createEvent(eventname: String!, description: String!, startdate: Date!, enddate: Date!, username: String!): Events
        createComment(commentText: String!, createdAt: Date!, username: String!, eventname: String!): Comments
    }

module.exports = typeDefs;