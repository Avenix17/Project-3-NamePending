import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Nav';
import React from "react";
import './App.css'


function App() {
	return (
		<div>

			{/* Header */}
			<div id = 'header'>
				<Header title="Under a-tack" />
			</div>
			
			<div id = 'navbar'>
				<Navbar />
			</div>
			
			{/* Footer */}
			<div id = 'footer'>
				<Footer version='V0.1.1----' />
			</div>

		</div>
	);
}

export default App;