import React from 'react';
import './contact.scss';
import { PhoneComponent } from './PhoneComponent';
import { MailComponent } from './MailComponent';
import { LinkedInComponent } from './LinkedInComponent';
import { GitHubComponent } from './GitHubComponent';

export default function Contact() {
	return (
		<div className="contact" id="contact">
			<h1>Contact</h1>
			<div className="boxContainer">
				<PhoneComponent />
				<MailComponent />
				<LinkedInComponent />
				<GitHubComponent />
			</div>
		</div>
	);
}


