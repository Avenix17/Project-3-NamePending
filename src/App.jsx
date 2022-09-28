// import Header from './components/Header/Header'
// import Footer from './components/Footer/Footer'
import Navbar from './components/navbar/Nav';
import Main from './components/Main/Main';
// import Calendar from './components/Calendar/Calendar';
import EventDate from './components/calendar-list/calendar-list';
import SavedEvents from './components/saved-list/saved-list';
import React from "react";

import './App.css'

function App() {
	return (
		<div>

			{/* Header */}
			{/* <div id='header'>
				{<Header title="Under a-tack" />}
			</div> */}

			{/* Main */}
			<div id='main'>
				{/* <Calendar /> */}
				<Main />
				<EventDate />
				<SavedEvents />
			</div>

			{/* Footer */}
			{/* <div id='footerMain'>
				<Footer id="footer" version='V0.1.1----' />
			</div> */}

		</div>
	);
}

export default App;