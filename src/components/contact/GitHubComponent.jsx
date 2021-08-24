import React from 'react';
import { GitHub } from '@material-ui/icons';


export const GitHubComponent = () => {
	return (
		<div className="itemContainer">
			<a
				href="https://github.com/ncongduy?tab=repositories"
				target="blank"
				className="itemBox"
			>
				<GitHub className="icon" />
				<span>GitHub</span>
			</a>
		</div>
	);
};
