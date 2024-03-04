import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer () {
    return (
        <div className="footer--container">
            {/* <div id="transition"></div> */}
            <footer className="games--footer">
                <ul className="games--footer--list">
                    <a href="https://github.com/WilsonBravo" target="_blank" className="games--list--item">
                        <FontAwesomeIcon icon={faGithub} ></FontAwesomeIcon>
                    </a>
                    <a href="https://www.linkedin.com/in/wilson-bravo/" target="_blank" className="games--list--item">
                        <FontAwesomeIcon icon={faLinkedin} className="fa-linkedin"></FontAwesomeIcon>
                    </a>
                    <a href="mailto:bravoc.wilson@gmail.com" target="_blank" className="games--list--item">
                        <FontAwesomeIcon icon={faEnvelope} className="fa-envelope"></FontAwesomeIcon>
                    </a>
                </ul>
            </footer>
        </div>
    )
}