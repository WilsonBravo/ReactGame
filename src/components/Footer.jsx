// npm install --save @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome
// npm install --save @fortawesome/free-brands-svg-icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer (props) {
    const footer__style={
        background: "#21222A",
        background: "linear-gradient(#282D35, #21222A)",
        boxShadow: "0 -10px 50px 40px #282D35",
    }

    return(
        <footer className="home--footer" style={props.darkMode ? footer__style:{}}>
            <a className="footer--social" href="mailto:bravoc.wilson@gmail.com" target="_blank">
                <FontAwesomeIcon icon={faEnvelope} className="footer--icons"></FontAwesomeIcon>
            </a>
            <a className="footer--social" href="https://github.com/WilsonBravo" target="_blank">
                <FontAwesomeIcon icon={faGithub} className="footer--icons"></FontAwesomeIcon>
            </a>
            <a className="footer--social" href="https://www.linkedin.com/in/wilson-bravo/" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} className="footer--icons"></FontAwesomeIcon>
            </a>
            <p className="footer--autor gray">{'\u00a9'}2024 By Wilson Bravo<br/> Created with Next js</p>
        </footer>
    )
}