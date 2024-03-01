'use client'

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

import React from "react";

export default function App () {
    const style={
        background: "#282D35",
        position: "absolute",
        top: "0px",
        right: "0px",
        bottom: "0px",
        left: "0px",
        zIndex:"-1",
        color: "white"
    }

    const [darkMode, setDarkMode] = React.useState(false)

    function darkModeToggle () {
        setDarkMode(prevDarkMode=>!prevDarkMode)        
    }

    return(
        <div style={darkMode ? style:{}}>
            <div id="opacity"></div>
            <Header darkModeToggle={darkModeToggle} darkMode={darkMode}/>
            <Main darkMode={darkMode}/>
            <Footer darkMode={darkMode}/>
        </div>
    )
}