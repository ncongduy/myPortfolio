import { React, useEffect, useRef } from 'react';
import './intro.scss';
import { init } from 'ityped';
import { LeftIntro } from './LeftIntro';
import { RightIntro } from './RightIntro';

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
			<LeftIntro />
			<RightIntro textRef={textRef} />
		</div>
	);
}


