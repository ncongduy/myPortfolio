import React from 'react';
import './contact.scss';
import { PhoneComponent } from './phone/PhoneComponent';
import { MailComponent } from './mail/MailComponent';
import { LinkedInComponent } from './linkedin/LinkedInComponent';
import { GitHubComponent } from './github/GitHubComponent';

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


