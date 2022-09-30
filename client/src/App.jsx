import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Calendarfun from "./components/Calendar/Calendar";
import EventInput from "./components/create-event/CreateEvent";
import SavedEvents from "./components/saved-list/saved-list";
import React, { useState } from "react";
import Login from "./components/login/Login";
import "./App.css";

function App() {

  const [nav] = useState(['home', 'createEvent']);
  const [currentNav, setCurrentNav] = useState(nav[0]);

  function renderComponent(currentNav) {
    switch (currentNav) {
      case 'home':
        return (
        <div>
          {/* <Calendarfun />
          <SavedEvents /> */}
					<Login />
        </div>);
      case 'createEvent':
        return <EventInput />;
      default:
        return (
          <div>
            {/* <Calendarfun />
            <SavedEvents /> */}
          </div>
          );
    }
  }

  return (
    <div className="screen">
      <Header title="Under a-tack" currentNav={currentNav} setCurrentNav={setCurrentNav} />

      <main id="main">
        { renderComponent(currentNav) }
      </main>

			

      <Footer id="footer" version="V0.1.1----" />
    </div>
  );
}

export default App;
