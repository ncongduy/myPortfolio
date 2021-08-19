import { React, useEffect, useRef } from 'react';
import './intro.scss';
import { init } from 'ityped';

export default function Intro() {
	const textRef = useRef();

	useEffect(() => {
		init(textRef.current, {
			showCursor: false,
			backDelay: 1500,
			backSpeed: 60,
			strings: ['Front-end', 'Back-end'],
		});
	}, []);

	return (
		<div className="intro" id="intro">
			{/* On the left part */}
			<div className="left">
				<div className="img-container">
					<img src="assets/img/me.jpg" alt="" />
				</div>
			</div>

			{/* On the right part */}
			<div className="right">
				<div className="wrapper">
					<h2>Hi there, I'm</h2>
					<h1>Duy</h1>
					<h3>
						Developer <span ref={textRef}></span>
					</h3>
				</div>
				<a href="#portfolio">
					<i className="ti-angle-double-down"></i>
				</a>
			</div>
		</div>
	);
}
