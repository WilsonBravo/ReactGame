import React from "react";
import Confetti from "react-confetti"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

import './secretNumber.css'

export default function SecretNumber (props) {
    const [formData,setFormData] = React.useState({
        inputNumber: ''
    })
    const [number, setNumber] = React.useState(String(Math.floor(Math.random() * 100)+1))
    const [userMessages, setUserMessages]= React.useState({
        win:false,
        restart: false,
        tryCount: 1,
        maxCount: 4,
        message: 'Try to guess the secret number',
        chances: 'Enter a number from 1 to 100'
    })

    function handleChange(event) {
        const {name, value} = event.target
        setFormData(prevFormData=>
                {
                    return {...prevFormData, [name]: value}
                }
            )
    }

    function compareNumber () {
        if (formData.inputNumber === number) {
            setUserMessages(prevUserMessages=>(
                {...prevUserMessages, 
                    win:true,
                    message:'You Won!', 
                    chances:`You did it in ${prevUserMessages.tryCount} chances`,
                    restart:true}
            ))
        }
        else {
            if(userMessages.maxCount-userMessages.tryCount === 0){
                setUserMessages(prevUserMessages=>(
                    {...prevUserMessages, 
                        message:`Try Again`,
                        chances:`You have ${prevUserMessages.maxCount-prevUserMessages.tryCount} chances left`,
                        restart: true}
                ))
            } else {
                setUserMessages(prevUserMessages=>(
                    {...prevUserMessages, 
                        message:formData.inputNumber < number ?`the number is greater`:`the number is smaller`,
                        chances:`You have ${prevUserMessages.maxCount-prevUserMessages.tryCount} chances left`, 
                        tryCount:prevUserMessages.tryCount+1}
                ))
                
            }
        }
    }

    function newGame () {
        setNumber(String(Math.floor(Math.random() * 100)+1))
        setUserMessages({
            win:false,
            restart: false,
            tryCount: 1,
            maxCount: 4,
            message: 'Try to guess the secret number',
            chances: 'Enter a number from 1 to 100'
        })
        setFormData({
            inputNumber: ''
        })
    }

    return (
        <>
            {userMessages.win && <Confetti/>}
            <section className="modal--content">                    
                <FontAwesomeIcon icon={faTimesCircle} className="close-btn" onClick={props.toggleOpenGame}></FontAwesomeIcon>
                <h1>{userMessages.message}</h1>
                <p>{userMessages.chances}</p>

                <div className="send--number--form">
                    <input 
                        type="number"
                        name="inputNumber"
                        onChange={handleChange}
                        value={formData.inputNumber}
                    />
                    {userMessages.restart?
                    <button onClick={newGame}>
                        New Game
                    </button>:
                    <button onClick={compareNumber}>
                        Try!
                    </button>}
                </div>
            </section>
        </>
    )
}