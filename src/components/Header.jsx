import React from "react"
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { faPython, faRaspberryPi, faLinux } from "@fortawesome/free-brands-svg-icons";

export default function Header (props) {
    const style={
        background: "#21222A",
        color: "white"
    }

    const buttonBackground = {
        backgroundImage: `url("/bar--light.png")`
    }

    const buttonStyle = {
        marginRight: "0",
        marginLeft: "auto"
    }
    
    return(
        <header style={props.darkMode ? style:{}} className="home--header">
            <div className="header-title">
                <img className="header--logo" src="/logo.png" alt="Logo" />
                <img className="header--logo" src="/react-logo.png" alt="Logo" />
                <FontAwesomeIcon icon={faPython} className="header--logo" style={props.darkMode ?{color:"#2a859c"}:{color:"#183153"}}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faRaspberryPi} className="header--logo" style={{color:"red"}}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faLinux} className="header--logo"></FontAwesomeIcon>
                {/* <h1>Here goes Header</h1> */}
            </div>
            <nav>
                <div className="dropdown">
                    <button className="dropbtn">Home</button>
                    <div className="dropdown-content">
                    <a href="#About">About</a>
                    {/* <a href="#">Interests</a> */}
                    <a href="#Proyects">Proyects</a>
                    </div>
                </div> 
                <Link className="home--header--item" href="/Games">Games</Link>
                <Link className="home--header--item" href="/NotesApp">Notes App</Link>
                <div className="home--darkmode">
                    {/* <span className="bold">Ligth</span> */}
                    <FontAwesomeIcon icon={faSun} className="bold orange"></FontAwesomeIcon>
                    <button className="change--colorbutton" onClick={props.darkModeToggle}>
                        <div style={props.darkMode ? buttonBackground:{}} className="change--colormode">
                            <img style={props.darkMode ? buttonStyle:{}} src={props.darkMode ? "./circle--dark.png":"./circle--light.png"} alt="circle" />
                        </div>
                    </button>
                    {/* <span className="gray">Dark</span> */}
                    <FontAwesomeIcon icon={faMoon} className="gray"></FontAwesomeIcon>
                </div>
            </nav>
        </header>
    )
}