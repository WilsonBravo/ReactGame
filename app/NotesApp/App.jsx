'use client'
import React from "react"
import Sidebar from "./components/Sidebar"
import Editor from "./components/Editor"
import Split from "react-split"
import {nanoid} from "nanoid"
import { onSnapshot, addDoc, doc, deleteDoc, setDoc } from "firebase/firestore"
import { notesCollection, db } from "./firebase"

import "./style.css";

export default function App() {
    // Use LocalStorage -------------------------------------------------
    // const [notes, setNotes] = React.useState(
    //     () => JSON.parse(localStorage.getItem('notes')) || []
    //     )
    // const [currentNoteId, setCurrentNoteId] = React.useState(
    //     (notes[0]?.id) || ""
    // )

    // React.useEffect(()=>{
    //     localStorage.setItem('notes', JSON.stringify(notes))
    // }, [notes])

    // function createNewNote() {
    //     const newNote = {
    //         id: nanoid(),
    //         body: "# Type your markdown note's title here"
    //     }
    //     setNotes(prevNotes => [newNote, ...prevNotes])
    //     setCurrentNoteId(newNote.id)
    // }

    // function updateNote(text) {
    //     // Put the most recently-modified at the top
    //     setNotes(oldNotes => {
    //         const newNotes = []

    //         for (let index = 0; index < oldNotes.length; index++) {
    //             const oldNote=oldNotes[index]

    //             if (oldNote.id === currentNoteId) {
    //                 // put the updated note at the 
    //                 // beginning of the new array
    //                 newNotes.unshift({...oldNote, body: text})
    //             } else {
    //                 newNotes.push(oldNote)
    //             }
    //         }
    //         return newNotes
    //     })
    // }

    // function deleteNote(event, noteId) {
    //     event.stopPropagation()
    //     setNotes(oldNotes=>{
    //         const newNotes = oldNotes.filter(note => note.id !== noteId);
    //         return newNotes
    //     })
    // }

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
            <Split 
                sizes={[30, 70]} 
                direction="horizontal" 
                className="split"
            >
                <Sidebar
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
            </Split>
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
