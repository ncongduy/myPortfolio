import React from 'react';

export const RightTopbar = ({menuOpen, setMenuOpen}) => {
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
