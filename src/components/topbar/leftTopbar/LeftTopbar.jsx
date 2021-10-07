import React from 'react';
import { PhoneIphone, Mail, LinkedIn, GitHub } from '@material-ui/icons';

export const LeftTopbar = () => {
	return (
		<div className='left'>
			<a href='#intro' className='logo'>
				ncd.
			</a>

			<div className='itemContainer'>
				<div className='itemBox'>
					<PhoneIphone className='icon' />
					<span>+358 46 681 5155</span>
				</div>
			</div>

			<div className='itemContainer'>
				<div className='itemBox'>
					<Mail className='icon' />
					<span>ncongduy@gmail.com</span>
				</div>
			</div>

			<div className='itemContainer'>
				<a
					href='https://www.linkedin.com/in/duy-nguyen-55b850197/'
					target='blank'
					className='itemBox'
				>
					<LinkedIn className='icon' />
					<span>LinkedIn</span>
				</a>
			</div>

			<div className='itemContainer'>
				<a
					href='https://github.com/ncongduy'
					target='blank'
					className='itemBox'
				>
					<GitHub className='icon' />
					<span>GitHub</span>
				</a>
			</div>
		</div>
	);
};
