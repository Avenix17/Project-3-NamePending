import { gql } from '@apollo/client';

export const QUERY_EVENTS = gql `
    {
        events {
            _id: ID!
            eventname: String!
            description: String!
            startdate: Date!
            enddate: Date!
            username: String!
            comments: {
                commentText
            }
        }
    }
`;

export const QUERY_ONEEVENT = gql `
    query getOneEvent($events: ID) {
        events(events: $events) {
            
        }
    }
`;