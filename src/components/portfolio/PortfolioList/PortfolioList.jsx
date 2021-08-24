import { React } from 'react';
import PortfolioItem from './PortfolioItem/PortfolioItem';


export const PortfolioList = ({ list, selected, setSelected }) => {
	return (
		<ul>
			{list.map((item) => (
				<PortfolioItem
					id={item.id}
					title={item.title}
					active={selected === item.id}
					setSelected={setSelected} />
			))}
		</ul>
	);
};
