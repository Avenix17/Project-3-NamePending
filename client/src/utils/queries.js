import { gql } from '@apollo/client';

export const QUERY_EVENTS = gql `
    query Query {
        getAllEvents {
        _id
        eventname
        description
        startdate
        enddate
        }
    }
`;

export const QUERY_ONEEVENT = gql `
    query getOneEvent($events: ID) {
        getAllEvents(events: $events) {
            _id
            eventname
            description
            startdate
            enddate
        }
    }
`;
