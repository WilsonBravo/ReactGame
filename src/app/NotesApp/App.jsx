'use client'
import React from "react"
import Sidebar from "@/components/NotesApp/Sidebar"
import Editor from "@/components/NotesApp/Editor"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNoteSticky, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { onSnapshot, addDoc, doc, deleteDoc, setDoc } from "firebase/firestore"
import { notesCollection, db } from "./firebase"

import "@/styles/NotesApp/style.css";

export default function App() {
    const [toggleSideBar, setToggleSideBar] = React.useState(false)

    // Use Firebase -------------------------------------------------
    const [notes, setNotes] = React.useState([])
    const [currentNoteId, setCurrentNoteId] = React.useState("")

    const currentNote = 
        notes.find(note => note.id === currentNoteId) 
        || notes[0]

    const [tempNoteText, setTempNoteText] = React.useState("")

    const sortedNotes = notes.sort((a, b) => b.updatedAt - a.updatedAt);

    React.useEffect(() => {
        const unsubscribe = onSnapshot(notesCollection, function(snapshot) {
            // Sync up our local notes array with the snapshot data
            const notesArr = snapshot.docs.map(doc => ({
                ...doc.data(),
                id: doc.id
            }))
            setNotes(notesArr)
        })
        return unsubscribe
    }, [])

    React.useEffect(() => {
        if (!currentNoteId) {
            setCurrentNoteId(notes[0]?.id)
        }
    }, [notes])

    React.useEffect(() => {
        if (currentNote) {
            setTempNoteText(currentNote.body)
        }
    }, [currentNote])

    React.useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (tempNoteText !== currentNote?.body) {
                updateNote(tempNoteText)
            }
        }, 500)
        return () => clearTimeout(timeoutId)
    }, [tempNoteText])

    async function createNewNote() {
        const newNote = {
            body: "# Type your markdown note's title here",
            createdAt: Date.now(),
            updatedAt: Date.now(),
        }
        const newNoteRef = await addDoc(notesCollection, newNote)
        setCurrentNoteId(newNoteRef.id)
    }
    
    async function updateNote(text) {
        if (!currentNoteId) {
            console.error("Error: currentNoteId is not defined.");
            return;
        }
        const docRef = doc(db, "notes", currentNoteId)
        await setDoc(docRef, { body: text, updatedAt: Date.now(), }, { merge: true })
    }

    async function deleteNote(noteId) {
        const docRef = doc(db, "notes", noteId)
        await deleteDoc(docRef)
    }
    
    return (
            <main>
            {
                notes.length > 0 
                ?
                <div className="split">
                    <div className="open--sidebar--container">
                        <FontAwesomeIcon icon={faNoteSticky} className="open--sidebar" onClick={()=>{
                            setToggleSideBar(prevToggleSideBar=>{
                                return !prevToggleSideBar})
                        }}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faCirclePlus} style={{color:"#4A4E74"}}></FontAwesomeIcon>                        
                    </div>
                    <Sidebar                        
                        toggleSideBar={toggleSideBar}
                        setToggleSideBar={setToggleSideBar}
                        // LocalStorage
                        // notes={notes}
                        notes={sortedNotes}
                        deleteNote={deleteNote}
                        currentNote={currentNote}
                        setCurrentNoteId={setCurrentNoteId}
                        newNote={createNewNote}
                    />
                    <Editor 
                        // LastStorage
                        // currentNote={currentNote} 
                        // updateNote={updateNote} 

                        tempNoteText={tempNoteText}
                        setTempNoteText={setTempNoteText}
                    />
                </div>
                :
                <div className="no-notes">
                    <h1>You have no notes</h1>
                    <button 
                        className="first-note" 
                        onClick={createNewNote}
                    >
                        Create one now
                    </button>
                </div>
                
            }
            </main>
    )
}
