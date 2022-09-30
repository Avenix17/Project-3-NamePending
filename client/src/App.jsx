import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Calendarfun from "./components/Calendar/Calendar";
import EventInput from "./components/create-event/CreateEvent";
import SavedEvents from "./components/saved-list/saved-list";
import React, { useState } from "react";
import Login from "./components/login/Login";
import "./App.css";

function App() {
  const [nav] = useState(["home", "createEvent"]);
  const [currentNav, setCurrentNav] = useState(nav[0]);
  const [user, setUser] = useState();

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
    <div className="screen">
      <Header
        title="Under a-tack"
        currentNav={currentNav}
        setCurrentNav={setCurrentNav}
        setUser={setUser}
      />

      <main id="main">{mainComponent}</main>

      <Footer id="footer" version="V0.1.1----" />
    </div>
  );
}

export default App;
