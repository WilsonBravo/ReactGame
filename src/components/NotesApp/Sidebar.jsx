import React from "react"
import {motion} from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

export default function Sidebar(props) {
    const noteElements = props.notes.map((note, index) => (
        // (JSON.stringify(note.body).split('\n'))[0]
        <div key={note.id}>
            <div
                className={`title ${
                    note.id === props.currentNote.id ? "selected-note" : ""
                }`}
                onClick={props.toggleSideBar ? 
                    () => {
                        props.setCurrentNoteId(note.id)
                        props.setToggleSideBar(prevToggleSideBar=>!prevToggleSideBar)
                    }
                    :
                    () => props.setCurrentNoteId(note.id)}
            >
                <h4 className="text-snippet">{note.body.split(`\n`)[0]}</h4>
                <FontAwesomeIcon 
                    icon={faTrashCan} 
                    className="fa-trash" 
                    onClick={() => props.deleteNote(note.id)}
                    // LocalStorage
                    // onClick={(event) => props.deleteNote(event, note.id)}
                ></FontAwesomeIcon>
            </div>
        </div>
    ))

    const [windowWidth, setWindowWidth] = React.useState(0);

    React.useEffect(() => {
        // Verificar si estamos en el lado del cliente antes de acceder a window
        if (typeof window !== "undefined") {
          setWindowWidth(window.innerWidth);
    
          // También puedes suscribirte a eventos de redimensionamiento si necesitas actualizar el estado cuando cambie el tamaño de la ventana.
          const handleResize = () => {
            setWindowWidth(window.innerWidth);
          };
    
          window.addEventListener("resize", handleResize);
    
          // Limpia el evento al desmontar el componente
          return () => {
            window.removeEventListener("resize", handleResize);
          };
        }
      }, []);

    return (

        <motion.section layout 
            className="pane sidebar" 
            style={windowWidth < 430 ? { height: props.toggleSideBar ? "auto" : "0" }:{}}
            // style={props.toggleSideBar?{display:"block"}:{display:"none"}}
            >
            <div className="sidebar--header">
                <h3>Notes</h3>
                <button className="new-note" onClick={props.newNote}>+</button>
            </div>
            {noteElements}
        </motion.section>
    )
}
