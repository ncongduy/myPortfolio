import { React, useState, useEffect } from 'react';
import './portfolio.scss';
import {
	list,
	udacityPortfolio,
	codecademyPortfolio,
	f8Portfolio,
	pluralsightPortfolio,
} from '../../data';
import { Container } from './Container/Container';
import { PortfolioList } from './PortfolioList/PortfolioList';

export default function Portfolio() {
	const [selected, setSelected] = useState('html&css');
	const [data, setData] = useState([]);

	useEffect(() => {
		switch (selected) {
			case 'udacity':
				setData(udacityPortfolio);
				break;
			case 'codecademy':
				setData(codecademyPortfolio);
				break;
			case 'f8':
				setData(f8Portfolio);
				break;
			case 'pluralsight':
				setData(pluralsightPortfolio);
				break;
			default:
				setData(udacityPortfolio);
		}
	}, [selected]);

	return (
		<div className='portfolio' id='portfolio'>
			{/* <h1>My Learning</h1> */}

			<PortfolioList
				list={list}
				selected={selected}
				setSelected={setSelected}
			/>

			<Container data={data} />
		</div>
	);
}
