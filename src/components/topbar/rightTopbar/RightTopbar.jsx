import React, { useContext } from 'react';
import { OpenContext } from '../../../App';

export const RightTopbar = () => {
	const [menuOpen, setMenuOpen] = useContext(OpenContext);
	return (
		<div className="right">
			<div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
				<span className="line1"></span>
				<span className="line2"></span>
				<span className="line3"></span>
			</div>
		</div>
	);
};
