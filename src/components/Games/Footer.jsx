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
                        <FontAwesomeIcon name="games--github" icon={faGithub} ></FontAwesomeIcon>
                    </a>
                    <a href="https://www.linkedin.com/in/wilson-bravo/" target="_blank" className="games--list--item games-linkedin">
                        <FontAwesomeIcon name="games--linkedin" icon={faLinkedin}></FontAwesomeIcon>
                    </a>
                    <a href="mailto:bravoc.wilson@gmail.com" target="_blank" className="games--list--item games-envelope">
                        <FontAwesomeIcon name="games-envelope" icon={faEnvelope}></FontAwesomeIcon>
                    </a>
                </ul>
            </footer>
        </div>
    )
}