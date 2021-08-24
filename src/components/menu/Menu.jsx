import React from 'react';
import './menu.scss';

export default function Menu({ menuOpen, setMenuOpen }) {
	return (
		<div className={menuOpen ? 'menu active' : 'menu'}>
			<ul>
				<li onClick={() => setMenuOpen(false)}>
					<a href="#intro">Home</a>
				</li>
				<li onClick={() => setMenuOpen(false)}>
					<a href="#portfolio">My Learning</a>
				</li>
				<li onClick={() => setMenuOpen(false)} className="contact">
					<a href="#contact">Contact</a>
				</li>
			</ul>
		</div>
	);
}
