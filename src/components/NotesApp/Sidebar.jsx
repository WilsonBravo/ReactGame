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

    return (

        <motion.section layout 
            className="pane sidebar" 
            style={window.innerWidth < 430 ? { height: props.toggleSideBar ? "auto" : "0" }:{}}
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
