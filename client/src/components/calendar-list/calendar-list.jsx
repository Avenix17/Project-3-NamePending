import React from "react";
import "./calendar-list.css";
import { useQuery } from "@apollo/client";
import { QUERY_ONE_DAY } from "../../utils/queries";

const EventDate = (props) => {
  const { date } = props;

  const { loading, data } = useQuery(QUERY_ONE_DAY, {
    variables: { startdate: date },
  });

  const events = data?.getOneEvent || [];

  if (loading) {
    return <div>Loading...</div>;
  }

  let eventsMap = events.map((e) => (
    <li className="events" key={e._id}>
      <div className="event-card">
        <h3 className="event-name">{e.eventname}</h3>
        <p className="event-description">{e.description}</p>
      </div>
    </li>
  ));

  return <div id="calendar-list">{eventsMap}</div>;
};

export default EventDate;
