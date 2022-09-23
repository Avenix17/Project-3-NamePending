import Header from './components/Header';
import Footer from './components/Footer';
import './App.css'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Navlogo from "./components/Banner2.png"


function App() {
	return (
		<div>
			//Generates the header via props to react
			{<Header title="Under a-tack" />}
			//this is to pass in a backgroundImage to Nav if we do so?
			<div id="imgBack" style={{ backgroundImage: `url(${Navlogo})` }}>
				
			</div>
			//id for footer for styling and V for version contol
			<Footer id="footer" version='V0.0.1----' />
		</div>
	);
}

export default App;