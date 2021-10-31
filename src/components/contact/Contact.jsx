import React from 'react';
import './contact.scss';
import { MailComponent } from './mail/MailComponent';
import { LinkedInComponent } from './linkedin/LinkedInComponent';
import { GitHubComponent } from './github/GitHubComponent';

export default function Contact() {
	return (
		<div className="contact" id="contact">
			<div className="boxContainer">
				<MailComponent />
				<LinkedInComponent />
				<GitHubComponent />
			</div>
		</div>
	);
}


