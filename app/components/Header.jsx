import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
                <div class="dropdown">
                    <button class="dropbtn">Home</button>
                    <div class="dropdown-content">
                    <a href="#">About</a>
                    <a href="#">Interests</a>
                    <a href="#">Proyects</a>
                    </div>
                </div> 
                <a className="home--header--item" href="#">Game</a>
                <a className="home--header--item" href="/NotesApp">Notes App</a>
                <div className="home--darkmode">
                    <span className="bold">Ligth</span>
                    <button className="change--colorbutton" onClick={props.darkModeToggle}>
                        <div style={props.darkMode ? buttonBackground:{}} className="change--colormode">
                            <img style={props.darkMode ? buttonStyle:{}} src={props.darkMode ? "./circle--dark.png":"./circle--light.png"} alt="circle" />
                        </div>
                    </button>
                    <span className="gray">Dark</span>
                </div>
            </nav>
        </header>
    )
}