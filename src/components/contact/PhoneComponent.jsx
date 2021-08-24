import React from 'react';
import { PhoneIphone } from '@material-ui/icons';


export const PhoneComponent = () => {
	return (
		<div className="itemContainer">
			<div href="#intro" className="itemBox">
				<PhoneIphone className="icon" />
				<span>+358 46 681 5155</span>
			</div>
		</div>
	);
};
