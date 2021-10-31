import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import ContactsIcon from '@mui/icons-material/Contacts';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

export const LeftTopbar = () => {
	return (
		<div className='left'>
			<a href='#intro' className='logo'>
				ncd.
			</a>

			<div className='itemContainer'>
				<div className='itemBox'>
					<HomeIcon className='icon' />
					<span>Home</span>
				</div>
			</div>

			<div className='itemContainer'>
				<div className='itemBox'>
					<AutoStoriesIcon className='icon' />
					<span>My learning</span>
				</div>
			</div>

			<div className='itemContainer'>
				<div className='itemBox'>
					<ContactsIcon className='icon' />
					<span>Contact</span>
				</div>
			</div>

			{/* <div className='itemContainer'>
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
			</div> */}
		</div>
	);
};
