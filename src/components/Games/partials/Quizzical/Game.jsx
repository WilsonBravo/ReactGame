import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

export default function Quizzical (props) {
    return (
        <>
            {/* {!toggleRoll && <Confetti/>} */}
            <section className="modal--content">                    
                <FontAwesomeIcon icon={faTimesCircle} className="close-btn" onClick={props.toggleOpenGame}></FontAwesomeIcon>
                <h1>Here Goes Quizzical Game</h1>
                <p>Here goes brief game description.</p>
            </section>
        </>
    )
}