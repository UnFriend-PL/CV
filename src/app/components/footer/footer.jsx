import "./footer.css";
export default function Footer() {
  return (
    <>
      <div className="Footer" id="Contact">
        <div className="FooterContent">
          <div className="FooterLeft">
            <div className="FooterLink">
              <a
                href="https://www.linkedin.com/in/szymonmarcinkowski20/"
                target="_blank"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                  alt="linkedIn"
                />
              </a>
            </div>
            <div className="FooterLink">
              <a
                href="https://www.facebook.com/szymon.marcinkowskii/"
                target="_blank"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg"
                  alt="Facebook"
                />
              </a>
            </div>
            <div className="FooterLink">
              <a href="https://github.com/UnFriend-PL" target="_blank">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                  alt="Github"
                />
              </a>
            </div>
          </div>
          <div className="FooterRight">
            <div className="FooterLink">
              Copyright © {new Date().getFullYear()} Szymon Marcinkowski. All
              rights reserved.
            </div>
            <div className="FooterLink">
              <a href="tel:+48-600-029-636">+48 600 029 636</a>
            </div>
            <div className="FooterLink">
              <a href="mailto:szymonecki1233@gmail.com">
                Contact: szymonecki1233@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
