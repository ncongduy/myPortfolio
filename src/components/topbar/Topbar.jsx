import React from 'react';
import './topbar.scss';
import { Person, Mail, LinkedIn, GitHub } from '@material-ui/icons';

export default function Topbar({ menuOpen, setMenuOpen }) {
	return (
		<div className={'topbar ' + (menuOpen && 'active')} id="topbar">
			<div className="wrapper">
				{/* left Topbar */}
				<div className="left">
					<a href="#intro" className="logo">
						ncd.
					</a>

					<div className="itemContainer">
						<Person className="icon" />
						<span>+358 46 681 5155</span>
					</div>

					<div className="itemContainer">
						<Mail className="icon" />
						<span>ncongduy@gmail.com</span>
					</div>

					<div className="itemContainer">
						<a
							href="https://www.linkedin.com/in/duy-nguyen-55b850197/"
							target="blank"
						>
							<LinkedIn className="icon" />
							<span>LinkedIn</span>
						</a>
					</div>

					<div className="itemContainer">
						<a
							href="https://github.com/ncongduy?tab=repositories"
							target="blank"
						>
							<GitHub className="icon" />
							<span>GitHub</span>
						</a>
					</div>
				</div>

				{/* right Topbar */}
				<div className="right">
					<div
						className="hamburger"
						onClick={() => setMenuOpen(!menuOpen)}
					>
						<span className="line1"></span>
						<span className="line2"></span>
						<span className="line3"></span>
					</div>
				</div>
			</div>
		</div>
	);
}
