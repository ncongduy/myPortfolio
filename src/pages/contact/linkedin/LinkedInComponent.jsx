import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const LinkedInComponent = () => {
	return (
		<div className="itemContainer">
			<a
				href="https://www.linkedin.com/in/duy-nguyen-cong-55b850197/"
				target="blank"
				className="itemBox"
			>
				<LinkedInIcon className="icon" />
				<span>LinkedIn</span>
			</a>
		</div>
	);
};
