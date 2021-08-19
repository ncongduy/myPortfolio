import { SpaRounded } from '@material-ui/icons';
import { React, useState } from 'react';
import './contact.scss';

export default function Contact() {
	const [message, setMessage] = useState(false);

	const handleSubmit = (evt) => {
		evt.preventDefault();
		setMessage(true);
	};

	return (
		<div className="contact" id="contact">
			<div className="left">
				<img src="assets/img/shakehand.svg" alt="shake hand" />
			</div>
			<div className="right">
				<h2>Contact.</h2>
				<form onSubmit={handleSubmit}>
					<input type="email" placeholder="Email" />
					<textarea placeholder="Message"></textarea>
					<button type="submit">Send</button>
					{message && <span>Thanks, I'll reply ASAP.</span>}
				</form>
			</div>
		</div>
	);
}
