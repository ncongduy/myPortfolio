import React from 'react';
import './topbar.scss';
import { Person, Mail } from '@material-ui/icons';

export default function Topbar() {
	return (
		<div className="topbar" id="topbar">
			<div className="wrapper">
				<div className="left">
					<a href="#intro" className="logo">
						ncd.
					</a>

					<div className="item-container">
						<Person className="icon" />
						<span>+358 46 681 5155</span>
					</div>

                    <div className="item-container">
						<Mail className="icon" />
						<span>ncongduy@gmail.com</span>
					</div>
				</div>
				<div className="right"></div>
			</div>
		</div>
	);
}
