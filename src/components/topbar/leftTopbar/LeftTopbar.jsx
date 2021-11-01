import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import ContactsIcon from '@mui/icons-material/Contacts';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

export const LeftTopbar = () => {

	function handleClick(evt) {
		let element = evt.target;
		let parentElement;

		do {
			parentElement = element.parentElement;
			if (parentElement.className === 'itemBox') {
				break;
			}

			element = parentElement;
		} while (true);

		const nameElementScrollTo = parentElement.dataset.id;
		const elementScrollTo = document.getElementById(nameElementScrollTo);
		elementScrollTo.scrollIntoView({ behavior: 'smooth' });
	}

	return (
		<div className='left'>
			<a href='#intro' className='logo'>
				ncd.
			</a>

			<div className='itemContainer' onClick={handleClick}>
				<div data-id='intro' className='itemBox'>
					<HomeIcon className='icon' />
					<span>Home</span>
				</div>
			</div>

			<div className='itemContainer' onClick={handleClick}>
				<div data-id='portfolio' className='itemBox'>
					<AutoStoriesIcon className='icon' />
					<span>My learning</span>
				</div>
			</div>

			<div className='itemContainer' onClick={handleClick}>
				<div data-id='contact' className='itemBox'>
					<ContactsIcon className='icon' />
					<span>Contact</span>
				</div>
			</div>
		</div>
	);
};
