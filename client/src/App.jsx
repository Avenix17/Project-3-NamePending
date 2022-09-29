import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Calendarfun from "./components/Calendar/Calendar";
import EventDate from "./components/calendar-list/calendar-list";
import SavedEvents from "./components/saved-list/saved-list";
import React, { useState } from "react";

import "./App.css";

function App() {
  return (
    <div className="screen">
      <Header title="Under a-tack" />

      <main id="main">
        <Calendarfun />
        {/* <Main /> */}
        {/* <EventDate /> */}
        <SavedEvents />
      </main>

      <Footer id="footer" version="V0.1.1----" />
    </div>
  );
}

export default App;
