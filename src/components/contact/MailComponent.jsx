import React from 'react';
import { Mail } from '@material-ui/icons';


export const MailComponent = () => {
	return (
		<div className="itemContainer">
			<div href="#intro" className="itemBox">
				<Mail className="icon" />
				<span>ncongduy@gmail.com</span>
			</div>
		</div>
	);
};
