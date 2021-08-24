import React from 'react';
import './topbar.scss';
import { RightTopbar } from './RightTopbar';
import { LeftTopbar } from './LeftTopbar';

export default function Topbar({ menuOpen, setMenuOpen }) {
	return (
		<div className={menuOpen ? 'topbar active' : 'topbar'} id="topbar">
			<div className="wrapper">
				<LeftTopbar />
				<RightTopbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			</div>
		</div>
	);
}


