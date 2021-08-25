import { React } from 'react';
import './portfolioList.scss';

export const PortfolioList = ({ list, selected, setSelected }) => {
	return (
		<ul>
			{list.map((item) => (
				<li
					className={
						selected === item.id
							? 'portfolioList active'
							: 'portfolioList'
					}
					onClick={() => setSelected(item.id)}
				>
					{item.title}
				</li>
			))}
		</ul>
	);
};
