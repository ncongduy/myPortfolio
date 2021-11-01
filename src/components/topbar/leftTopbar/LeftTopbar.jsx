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
				<a href='#intro' className='itemBox'>
					<HomeIcon className='icon' />
					<span>Home</span>
				</a>
			</div>

			<div className='itemContainer'>
				<a href='#portfolio' className='itemBox'>
					<AutoStoriesIcon className='icon' />
					<span>My learning</span>
				</a>
			</div>

			<div className='itemContainer'>
				<a href='#contact' className='itemBox'>
					<ContactsIcon className='icon' />
					<span>Contact</span>
				</a>
			</div>
		</div>
	);
};
