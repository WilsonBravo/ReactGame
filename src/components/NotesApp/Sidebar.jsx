import React from "react"
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
                onClick={() => props.setCurrentNoteId(note.id)}
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
        <section className="pane sidebar">
            <div className="sidebar--header">
                <h3>Notes</h3>
                <button className="new-note" onClick={props.newNote}>+</button>
            </div>
            {noteElements}
        </section>
    )
}
