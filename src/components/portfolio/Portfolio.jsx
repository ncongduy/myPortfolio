import { React, useState, useEffect } from 'react';
import './portfolio.scss';
import {
	list,
	htmlCssPortfolio,
	javascriptPortfolio,
	reactPortfolio,
	reduxPortfolio,
	nodePortfolio,
} from '../../data';
import { Container } from './Container/Container';
import { PortfolioList } from './PortfolioList/PortfolioList';

export default function Portfolio() {
	const [selected, setSelected] = useState('html&css');
	const [data, setData] = useState([]);

	useEffect(() => {
		switch (selected) {
			case 'html&css':
				setData(htmlCssPortfolio);
				break;
			case 'javascript':
				setData(javascriptPortfolio);
				break;
			case 'react':
				setData(reactPortfolio);
				break;
			case 'redux':
				setData(reduxPortfolio);
				break;
			case 'node.js':
				setData(nodePortfolio);
				break;
			default:
				setData(htmlCssPortfolio);
		}
	}, [selected]);

	return (
		<div className="portfolio" id="portfolio">
			<h1>My Learning</h1>

			<PortfolioList
				list={list}
				selected={selected}
				setSelected={setSelected}
			/>

			<Container data={data} />
		</div>
	);
}


