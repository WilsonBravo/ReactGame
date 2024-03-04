import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

import './encryptor.css'

export default function Encryptor (props) {
    return (
        <>
            {/* {!toggleRoll && <Confetti/>} */}
            <section className="modal--content">                    
                <FontAwesomeIcon icon={faTimesCircle} className="close-btn" onClick={props.toggleOpenGame}></FontAwesomeIcon>
                <h1>Here Goes Encryptor Game</h1>
                <p>Here goes brief game description.</p>
                <div className="encryptor--container">
                    <fieldset className="encryptor--fieldset background--ligth">
                        <legend>Encrypt text</legend>
                        <h3>Put yout text here:</h3>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                        <div>
                            <button>Encrypt</button>
                            <button>Decrypt</button>
                        </div>
                    </fieldset>
                    <fieldset className="encryptor--fieldset background--dark">
                        <legend>Decrypt text</legend>
                        <h3>Your message is:</h3>
                        <textarea name="" id="" cols="30" rows="10" disabled></textarea>
                        <button>Copy</button>
                    </fieldset>
                </div>
            </section>
        </>
    )
}