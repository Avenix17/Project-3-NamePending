import Header from './components/Header';
import Footer from './components/Footer';
import './App.css'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Navlogo from "./components/Banner2.png"


function App() {
	return (
		<div>

			{<Header title="Under a-tack" />}
			<div id="imgBack" style={{ backgroundImage: `url(${Navlogo})` }}>
				
			</div>
		
			<Footer id="footer" version='V0.1.1----' />
		</div>
	);
}

export default App;