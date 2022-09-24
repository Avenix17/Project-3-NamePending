import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Navbar from './components/navbar/Nav';
import Main from './components/Main/Main';
import React from "react";
import './App.css'


function App() {
	return (
		<div>

			{/* Header */}
			<div id = 'header'>
				<Header title = "Under a-tack" />
			</div>
			
			<div id = 'nav'>
				<Navbar />
			</div>
			
			{/* Main */}
			<div id = 'main'>
				<Main />
			</div>


			{/* Footer */}
			<div id = 'footer'>
				<Footer version = 'V0.1.1----' />
			</div>

		</div>
	);
}

export default App;