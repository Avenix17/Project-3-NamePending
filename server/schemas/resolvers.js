const { GraphQLScalarType, Kind } = require('graphql');
const { Users, Events, Comments } = require('../models');

const { signToken } = require('../utils/auth');

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

            getAllEvents: async () => {
                return Events.find({})
            },

            getAllComments: async () => {
                return Comments.find({})
            }
        },
        Mutation: {
            createUser(parent, args) {
                const userCreation = Users.create(args);
                return userCreation;
            },
            
        },
};

        Mutation: {
            createUsers: async (parent, {username, email, password}) => {
                const userCreation = await Users.create({username, email, password});
                const token = signToken(userCreation);
                return { token, userCreation };
            },            

            login: async (parent, { email, password }) => {
                const users = await Users.findOne({ email });
          
                if (!users) {
                  throw new AuthenticationError('Incorrect credentials');
                }
          
                const correctPw = await users.isCorrectPassword(password);
          
                if (!correctPw) {
                  throw new AuthenticationError('Incorrect credentials');
                }
          
                const token = signToken(users);
          
                return { token, users };
              },
        },
};

module.exports =  resolver;