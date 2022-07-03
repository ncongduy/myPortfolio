import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import './contact.scss';

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="contactImg">
        <img src={process.env.PUBLIC_URL + '/assets/img/contact.jpg'} alt="contact" />
      </div>

      <div className="boxContainer">
        <div className="boxComponent">
          <div className="itemContainer">
            <div className="itemBox">
              <EmailIcon className="icon" />
              <span>ncongduy@gmail.com</span>
            </div>
          </div>

          <div className="itemContainer">
            <a
              href="https://www.linkedin.com/in/duy-nguyen-cong-55b850197/"
              target="blank"
              className="itemBox"
            >
              <LinkedInIcon className="icon" />
              <span>LinkedIn</span>
            </a>
          </div>

          <div className="itemContainer">
            <a href="https://github.com/ncongduy" target="blank" className="itemBox">
              <GitHubIcon className="icon" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
