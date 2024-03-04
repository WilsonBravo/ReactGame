'use client'
import React from "react"
import { useId } from "react"
import GameCard from "./partials/GameCard"
import Carousel from "./partials/Carousel"

import '@/styles/Games/style.css'

export default function Main (props) {
    const GameCardElement = props.data.map((gameInfo)=><GameCard 
        key={useId()}
        gameInfo={gameInfo} 
        changeCarousel={props.changeCarousel}
        toggleOpenGame={props.toggleOpenGame}
    />)

    return (
        <main className="games--main">
            <div className="games--main--color"></div>
            <Carousel gameInfo={props.currentGame}/>
            <div className="game--card--container">
                {GameCardElement}
            </div>
        </main>
    )
}