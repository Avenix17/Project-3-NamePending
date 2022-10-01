const { AuthenticationError } = require('apollo-server-express');
const { GraphQLScalarType, Kind } = require('graphql');
const { Users, Events, Comments } = require('../models');

const { signToken } = require('../utils/auth');

const dateScalar = {
    Date: new GraphQLScalarType({
        name: 'Date',
        description: 'Date custom scalar type',
        parseValue(value) {
        // value from the client
        return new Date(value) 
        },
        serialize(value) {
        // value sent to the client
        return value.getTime()
        },
        parseLiteral(ast) {
        if (ast.kind === Kind.INT) {
            // ast value is always in string format
            return new Date(+ast.value) 
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

            getOneEvent: async (parent, { startdate } ) => {
                console.log('startdate', startdate);
                startdate = startdate ? (startdate.substring(0, 10) + 'T00:00:00.000Z') : startdate;
                console.log('startdate 2: ', startdate);
                const params = startdate ? { startdate } : {};
                return Events.find(params);
            },

            getAllComments: async () => {
                return Comments.find({})
            }
        },
    
        Mutation: {
            createUser: async (parent, { username, email, password }) => {
                const userCreation = await Users.create({ username, email, password })
                const token = signToken(userCreation)
                return { token, userCreation }
            },

            createEvent: async (parent, { eventname, description, startdate, enddate }) => {
                const eventCreation = await Events.create({ eventname, description, startdate, enddate })
                const token = signToken(eventCreation)
                return { token, eventCreation }
            },

            createComment: async (parent, { commentText, createdAt, eventname }) => {
                const commentCreation = await Comments.create({commentText, createdAt,eventname})
                const token = signToken(commentCreation)
                return { token, commentCreation }
            },

            deleteEvent: async (parent, { _id }) => {
                return await Events.findByIdAndRemove(_id)
            },

            login: async (parent, { email, password }) => {
                const users = await Users.findOne({ email })
          
                if (!users) {
                  throw new AuthenticationError('Incorrect credentials')
                }
          
                const correctPw = await users.isCorrectPassword(password)
          
                if (!correctPw) {
                  throw new AuthenticationError('Incorrect credentials')
                }
          
                const token = signToken(users);
          
                return { token, users };
              },
        },
};

module.exports = resolver;