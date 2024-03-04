import React from "react";

import Confetti from "react-confetti"
// import {nanoid} from "nanoid"

import './partials/Tenzies/tenzies.css'

import TenziesGame from "./partials/Tenzies/Game";
import SecretNumber from "./partials/SecretNumber/Game";
import Quizzical from "./partials/Quizzical/Game";
import Encryptor from "./partials/Encryptor/Game";

export default function Modal (props) {
    const style = {
        display: "flex",
    }

    return (
        <div className="modal-container" id="modalContainer" style={props.openGame? style:{}}>
            <div className="modal">
                {0 === props.currentGame?.id && <TenziesGame toggleOpenGame = {props.toggleOpenGame}/>}
                {1 === props.currentGame?.id && <SecretNumber toggleOpenGame = {props.toggleOpenGame}/>}
                {2 === props.currentGame?.id && <Quizzical toggleOpenGame = {props.toggleOpenGame}/>}
                {3 === props.currentGame?.id && <Encryptor toggleOpenGame = {props.toggleOpenGame}/>}
            </div>
        </div>
    )
}