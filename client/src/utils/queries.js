import { gql } from '@apollo/client';

export const QUERY_EVENTS = gql`
    query getAllEvents {
        events {
            _id
            eventname
            description
            startdate
            enddate
            username
        }
    }
`;

export const QUERY_ONE_DAY = gql`
    query dateEvents($startdate: String!) {
        getOneEvent(startdate: $startdate) {
            _id
            eventname
            description
            startdate
            enddate
        }
    }
`;