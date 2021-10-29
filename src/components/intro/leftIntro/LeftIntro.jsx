import { React } from 'react';

export const LeftIntro = () => {
	return (
		<div className="left">
			<div className="img-container">
				<img
					src={process.env.PUBLIC_URL + '/assets/img/me.jpg'}
					alt=""
				/>
			</div>
		</div>
	);
};