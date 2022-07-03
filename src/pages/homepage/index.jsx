import {useEffect, useRef} from 'react';
import {init} from 'ityped';

import './homepage.scss';

function HomePage() {
	const textRef = useRef();

	useEffect(() => {
		init(textRef.current, {
			showCursor: false,
			backDelay: 1500,
			backSpeed: 60,
			strings: ['Front-end', 'Back-end', 'Full-stack'],
		});
	}, []);

	return (
		<div className="homepage">
			<div className="left">
				<div className="img-container">
					<img src={process.env.PUBLIC_URL + '/assets/img/cv.jpg'} alt="CV" />
				</div>
			</div>

			<div className="right">
				<div className="wrapper">
					<h2>Hi there, I'm</h2>
					<h1>Duy</h1>
					<h3>
						Developer <span ref={textRef}></span>
					</h3>
				</div>
			</div>
		</div>
	);
}

export default HomePage;
