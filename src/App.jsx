import { Routes, Route } from 'react-router-dom';

import Topbar from './components/topbar/Topbar';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';

function App() {
	return (
		<div>
			<Topbar />

			<Routes>
				<Route path='/myPortfolio' element={<Intro />} />
				<Route path='/myPortfolio/portfolio' element={<Portfolio />} />
				<Route path='/myPortfolio/contact' element={<Contact />} />
			</Routes>
		</div>
	);
}

export default App;
