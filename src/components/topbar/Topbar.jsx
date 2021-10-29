import React, { useContext } from 'react';
import './topbar.scss';
import { RightTopbar } from './rightTopbar/RightTopbar';
import { LeftTopbar } from './leftTopbar/LeftTopbar';
import { OpenContext } from '../../App';

export default function Topbar() {
	const [menuOpen] = useContext(OpenContext);
	return (
		<div className={menuOpen ? 'topbar active' : 'topbar'} id="topbar">
			<div className="wrapper">
				<LeftTopbar />
				<RightTopbar />
			</div>
		</div>
	);
}