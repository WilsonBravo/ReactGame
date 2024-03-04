import React from "react";

import Die from "./Die";
import Confetti from "react-confetti"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

export default function TenziesGame (props) {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max)+1;
    }

    function allNewDice () {
        const diceArray = []
        for (let i = 0; i < 10; i++) {
            const dieValue = getRandomInt(6)
            diceArray.push({id:i, value:dieValue, on:true})          
        }
        return diceArray
    }

    function updateValues () {
        setDiceValues(prevDiceValues=>{
            const newDiceValues = prevDiceValues.map((die)=>die.on?{...die, value:getRandomInt(6)}:{...die})

            return newDiceValues
        })
    }

    function restartValues () {
        setToggleRoll(true)
        setDiceValues(allNewDice())
    }

    function setDieValue (dieId) {
        setDiceValues(prevDiceValues=>(
            prevDiceValues.map((Die)=> Die.id===dieId?{...Die,on:!Die.on}:{...Die})
        ))
    }

    const [diceValues, setDiceValues] = React.useState([])
    const [toggleRoll, setToggleRoll] = React.useState(()=>true)

    const diceElement = diceValues.map((dieValue)=><Die 
        key={dieValue.id} 
        value={dieValue.value}
        on={dieValue.on}
        onClick={()=>setDieValue(dieValue.id)}
    />)

    React.useEffect(()=>{
        setDiceValues(allNewDice())
    },[])

    React.useEffect(()=>{
        if (diceValues.length){
            let allValuesSame = true
            for (let i = 0; i < diceValues.length; i++) {
                if (diceValues[0].value != diceValues[i].value){
                    allValuesSame = false
                }
            }

            if (allValuesSame){
                let flag = false
                    for (let i = 0; i < diceValues.length; i++) {
                        if (diceValues[i].on === true){
                            flag = true
                        }
                    }
                    setToggleRoll(flag)
                }
            }
        },[diceValues]
    )

    return (
        <>
            {!toggleRoll && <Confetti/>}
            <section className="modal--content">                    
                <FontAwesomeIcon icon={faTimesCircle} className="close-btn" onClick={props.toggleOpenGame}></FontAwesomeIcon>
                <h1>{toggleRoll? 'Tenzies':'You Won!'}</h1>
                <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
                <div className="tenzies--dices">
                    {diceElement}
                </div>
                {toggleRoll?
                    <button className="tenzies--roll" onClick={updateValues}>Roll</button>:
                    <button className="tenzies--roll" onClick={restartValues}>Restart</button>
                }
            </section>
        </>
    )
}