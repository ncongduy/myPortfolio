import {Link} from 'react-router-dom';

import HomeIcon from '@mui/icons-material/Home';
import ContactsIcon from '@mui/icons-material/Contacts';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import './topbar.scss';

export default function Topbar() {
	return (
		<div className='topbar'>
			<Link to={`/myPortfolio`} className='topbar__item'>
				<HomeIcon className='topbar__icon' />
				<span>Home</span>
			</Link>

			<Link to={`/myPortfolio/portfolio`} className='topbar__item'>
				<AutoStoriesIcon className='topbar__icon' />
				<span>My projects</span>
			</Link>

			<Link to={`/myPortfolio/contact`} className='topbar__item'>
				<ContactsIcon className='topbar__icon' />
				<span>Contact</span>
			</Link>
		</div>
	);
}
