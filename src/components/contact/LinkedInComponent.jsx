import React from 'react';
import { LinkedIn } from '@material-ui/icons';


export const LinkedInComponent = () => {
	return (
		<div className="itemContainer">
			<a
				href="https://www.linkedin.com/in/duy-nguyen-55b850197/"
				target="blank"
				className="itemBox"
			>
				<LinkedIn className="icon" />
				<span>LinkedIn</span>
			</a>
		</div>
	);
};
