import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';


export const GitHubComponent = () => {
	return (
		<div className="itemContainer">
			<a
				href="https://github.com/ncongduy"
				target="blank"
				className="itemBox"
			>
				<GitHubIcon className="icon" />
				<span>GitHub</span>
			</a>
		</div>
	);
};
