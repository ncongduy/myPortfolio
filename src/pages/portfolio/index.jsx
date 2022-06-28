import { React, useState, useEffect } from 'react';
import './portfolio.scss';
import {
	list,
	udacityPortfolio,
	codecademyPortfolio,
	f8Portfolio,
} from '../../data';
import { Container } from './Container/Container';
import { PortfolioList } from './PortfolioList/PortfolioList';

export default function Portfolio() {
	const [selected, setSelected] = useState('udacity');
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
			default:
				setData(udacityPortfolio);
		}
	}, [selected]);

	return (
		<div className='portfolio' id='portfolio'>
			<PortfolioList
				list={list}
				selected={selected}
				setSelected={setSelected}
			/>

			<Container data={data} />
		</div>
	);
}
