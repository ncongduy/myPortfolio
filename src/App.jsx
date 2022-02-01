import React, { useState } from 'react';
import './app.scss';
import Contact from './components/contact/Contact';
import Intro from './components/intro/Intro';
import Menu from './components/menu/Menu';
import Portfolio from './components/portfolio/Portfolio';
import Topbar from './components/topbar/Topbar';

// use React Context
export const OpenContext = React.createContext();

function App() {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<div className='app'>
			<OpenContext.Provider
				value={{
					menuOpen,
					setMenuOpen,
				}}
			>
				<Topbar />
				<Menu />
				<Intro />
				<Portfolio />
				<Contact />
			</OpenContext.Provider>
		</div>
	);
}

export default App;
