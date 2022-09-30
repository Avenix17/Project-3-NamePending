const { GraphQLScalarType, Kind } = require('graphql');
const { Users, Events, Comments } = require('../models');

const dateScalar = {
    Date: new GraphQLScalarType({
        name: 'Date',
        description: 'Date custom scalar type',
        parseValue(value) {
        return new Date(value) // value from the client
        },
        serialize(value) {
        return value.getTime() // value sent to the client
        },
        parseLiteral(ast) {
        if (ast.kind === Kind.INT) {
            return new Date(+ast.value) // ast value is always in string format
        }
        return null
        }
    })
}

const resolver = {
    Date: dateScalar,
        Query: {
            getAllUsers: async () => {
                return Users.find({})
            },

            getAllEvents: async () => {
                return Events.find({})
            },

            getAllComments: async () => {
                return Comments.find({})
            }
        },

        Mutation: {
            createUsers: async (parent, { username, email, password }) => {
                const userCreation = Users.create(
                    { username },
                    { email },
                    { password }
                );
                return userCreation;
            },
        },
};

module.exports =  resolver;