'use client'
import React from "react"

import Modal from "@/components/Games/Modal"
import Header from "@/components/Games/Header"
import Main from "@/components/Games/Main"
import Footer from "@/components/Games/Footer"

import data from "@/components/Games/data"

export default function App () {
    const [openGame, setOpenGame] = React.useState(false)
    const [currentGame, setCurrentGame] = React.useState(data[0])

    function changeCarousel (gameInfo) {
        setCurrentGame(gameInfo)
    }

    function toggleOpenGame () {
        setOpenGame(prevOpenGame => !prevOpenGame)
    }
    
    return (
        <div className="games--body">
            <Modal 
                openGame={openGame} 
                toggleOpenGame={toggleOpenGame}
                currentGame={currentGame}
            />
            <Header/>
            <Main 
                data={data}
                openGame={openGame} 
                toggleOpenGame={toggleOpenGame}
                currentGame={currentGame}
                changeCarousel={changeCarousel}
                />
            <Footer/> 
                       
        </div>
    )
}