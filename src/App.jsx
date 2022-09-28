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

			<div id='nav'>
				<Navbar />
			</div>

			<div className="flex">
				<h1>Please Log in</h1>
				<form>
					<label>
						<p>Usernamer:</p>
						<input type="text" />
					</label>
					<label>
						<p>Password:</p>
						<input type="password" />
					</label>
					<div>
						<button type="submit">Submit</button>
					</div>
				</form>
			</div>

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