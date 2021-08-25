import { React } from 'react';

export const Container = ({ data }) => {
	return (
		<div className="container">
			{data.map((dt) => (
				<a className="item" href={dt.link} target="blank" key={dt.id}>
					<img
						src={process.env.PUBLIC_URL + dt.img}
						alt={dt.title}
						width="440px"
					/>
					<h3>{dt.title}</h3>
				</a>
			))}
		</div>
	);
};
