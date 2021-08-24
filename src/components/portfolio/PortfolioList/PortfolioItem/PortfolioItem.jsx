import React from 'react';
import './portfolioItem.scss';

export default function PortfolioItem({ id, title, active, setSelected }) {
	return (
		<li
			className={active ? 'portfolioList active' : 'portfolioList'}
			onClick={() => setSelected(id)}			
		>
			{title}
		</li>
	);
}
