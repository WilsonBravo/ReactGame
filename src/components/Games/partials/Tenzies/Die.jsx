'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faDiceOne, 
    faDiceTwo, 
    faDiceThree, 
    faDiceFour, 
    faDiceFive, 
    faDiceSix  } from "@fortawesome/free-solid-svg-icons";

export default function Die (props) {
    const style = {
        backgroundColor: "rgb(24, 24, 24,0.1)",
    }

    return (
        <>
            {props.value == 1 && <FontAwesomeIcon icon={faDiceOne} onClick={props.onClick} className="tenzies--die" style={props.on?{}:style}></FontAwesomeIcon>}
            {props.value == 2 && <FontAwesomeIcon icon={faDiceTwo} onClick={props.onClick} className="tenzies--die" style={props.on?{}:style}></FontAwesomeIcon>}
            {props.value == 3 && <FontAwesomeIcon icon={faDiceThree} onClick={props.onClick} className="tenzies--die" style={props.on?{}:style}></FontAwesomeIcon>}
            {props.value == 4 && <FontAwesomeIcon icon={faDiceFour} onClick={props.onClick} className="tenzies--die" style={props.on?{}:style}></FontAwesomeIcon>}
            {props.value == 5 && <FontAwesomeIcon icon={faDiceFive} onClick={props.onClick} className="tenzies--die" style={props.on?{}:style}></FontAwesomeIcon>}
            {props.value == 6 && <FontAwesomeIcon icon={faDiceSix} onClick={props.onClick} className="tenzies--die" style={props.on?{}:style}></FontAwesomeIcon>}
        </>
        // <div onClick={props.onClick} className="tenzies--die" style={props.on?{}:style}>
        //     {props.value == 1 && <FontAwesomeIcon icon={faDiceOne} className="fa-dice-icon"></FontAwesomeIcon>}
        //     {props.value == 2 && <FontAwesomeIcon icon={faDiceTwo} className="fa-dice-icon"></FontAwesomeIcon>}
        //     {props.value == 3 && <FontAwesomeIcon icon={faDiceThree} className="fa-dice-icon"></FontAwesomeIcon>}
        //     {props.value == 4 && <FontAwesomeIcon icon={faDiceFour} className="fa-dice-icon"></FontAwesomeIcon>}
        //     {props.value == 5 && <FontAwesomeIcon icon={faDiceFive} className="fa-dice-icon"></FontAwesomeIcon>}
        //     {props.value == 6 && <FontAwesomeIcon icon={faDiceSix} className="fa-dice-icon"></FontAwesomeIcon>}
        // </div>
    )
}