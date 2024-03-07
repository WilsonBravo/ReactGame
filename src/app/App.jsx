'use client'
import {motion, AnimatePresence} from "framer-motion"

import Header from "@/components/Header";
import Main from "@/components/Main";
import Footer from "@/components/Footer";

import React from "react";

export const revalidate = 0;


export default function App () {
    const style={
        background: "#282D35",
        position: "absolute",
        width:"100%",
        zIndex:"-1",
        color: "white"
    }

    const [darkMode, setDarkMode] = React.useState(false)

    function darkModeToggle () {
        setDarkMode(prevDarkMode=>!prevDarkMode)        
    }

    return(
        <>
            <div style={darkMode ? style:{}}>
                <div id="home-opacity"></div>
                <Header darkModeToggle={darkModeToggle} darkMode={darkMode}/>
                <Main darkMode={darkMode}/>
                <Footer darkMode={darkMode}/>
            </div>
        </>
    )
}