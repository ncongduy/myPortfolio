import { React, useState, useEffect } from 'react';
import './portfolio.scss';
import PortfolioList from '../portfolioList/PortfolioList';
import {
	htmlCssPortfolio,
	javascriptPortfolio,
	reactPortfolio,
	reduxPortfolio,
	nodePortfolio,
} from '../../data';

export default function Portfolio() {
	const [selected, setSelected] = useState('html&css');
	const [data, setData] = useState([]);

	const list = [
		{
			id: 'html&css',
			title: 'HTML & CSS',
		},
		{
			id: 'javascript',
			title: 'JavaScript',
		},
		{
			id: 'react',
			title: 'React',
		},
		{
			id: 'redux',
			title: 'Redux',
		},
		{
			id: 'node.js',
			title: 'Node.js',
		},
	];

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
			<ul>
				{list.map((item) => (
					<PortfolioList
						id={item.id}
						title={item.title}
						active={selected === item.id}
						setSelected={setSelected}
					/>
				))}
			</ul>
			<div className="container">
				{data.map((dt) => (
					<a className="item" href={dt.link} target="blank">
						<img src={process.env.PUBLIC_URL + dt.img} alt={dt.title} width="440px" />
						<h3>{dt.title}</h3>
					</a>
				))}
			</div>
		</div>
	);
}
