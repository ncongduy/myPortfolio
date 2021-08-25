import { React } from 'react';

export const RightIntro = ({ textRef }) => {
	return (
		<div className="right">
			<div className="wrapper">
				<h2>Hi there, I'm</h2>
				<h1>Duy</h1>
				<h3>
					Developer <span ref={textRef}></span>
				</h3>
			</div>
		</div>
	);
};
