import React, { useState } from "react";
// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   createHttpLink,
// } from "@apollo/client";
// import { setContext } from "@apollo/client/link/context";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Calendarfun from "./components/Calendar/Calendar";
import EventInput from "./components/create-event/CreateEvent";
import SavedEvents from "./components/saved-list/saved-list";
import Login from "./components/login/Login";
import "./App.css";

// Construct our main GraphQL API endpoint
// const httpLink = createHttpLink({
//   uri: "/graphql",
// });

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
// const authLink = setContext((_, { headers }) => {
//   // get the authentication token from local storage if it exists
//   const token = localStorage.getItem("id_token");
//   // return the headers to the context so httpLink can read them
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : "",
//     },
//   };
// });

// const client = new ApolloClient({
//   // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),
// });

function App() {
  const [nav] = useState(["home", "createEvent"]);
  const [currentNav, setCurrentNav] = useState(nav[0]);
  const [user, setUser] = useState();

  // Switch function for navbar, home button leads to homepage and createEvent button leads to Create Event
  function renderComponent(currentNav) {
    switch (currentNav) {
      case "home":
        return (
          <div>
            <Calendarfun />
            <SavedEvents />
          </div>
        );
      case "createEvent":
        return <EventInput />;
      default:
        return (
          <div>
            <Calendarfun />
            <SavedEvents />
          </div>
        );
    }
  }

  //If logic for login
  let mainComponent = renderComponent(currentNav);
  if (!user) {
    mainComponent = <Login setUser={setUser} />;
  }

  return (
    // <ApolloProvider client={client}>
      <div className="screen">
        <Header
          title="Under a-tack"
          currentNav={currentNav}
          setCurrentNav={setCurrentNav}
          setUser={setUser}
        />

        <main id="main">{ mainComponent }</main>

        <Footer id="footer" version="V0.1.1----" />
      </div>
    // </ApolloProvider>
  );
}

export default App;
