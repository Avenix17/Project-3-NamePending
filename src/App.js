import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/navbar/Nav';
import './App.css'


function App() {
	return (
		<div>

			{/* Header */}
			<div id = 'header'>
				<Header title="Under a-tack" />
			</div>
			
			{/* Logo - commented out because there is no logo yet */}
			{/*           <div id="imgBack" style={{ backgroundImage: `url(${Navlogo})` }}></div>            */}
				
			{/* Navbar */}
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