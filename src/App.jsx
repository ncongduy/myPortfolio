import Topbar from './components/topbar/Topbar';
import Menu from './components/menu/Menu';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import './app.scss';
import React, { useState } from 'react';

// use React Context
export const OpenContext = React.createContext();

function App() {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<div className="app">
			<OpenContext.Provider value={[menuOpen, setMenuOpen]}>
				<Topbar />
				<Menu />
				<div className="sections">
					<Intro />
					<Portfolio />
					<Contact />
				</div>
			</OpenContext.Provider>
		</div>
	);
}

export default App;
