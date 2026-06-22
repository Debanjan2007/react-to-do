import NothingToShow from "../Notes/NonotesShow.jsx"
import ShowNotes from '../Notes/NoteShow.jsx'
import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { leftArrow } from '../../assets/left-arrow-svg.jsx'
import { rightArrow } from '../../assets/right-arrow-svg.jsx'

export default function NotesUi() {
    const PAGE_LIMIT = 3
    const [pageNumber, setPageNumber] = useState(1)
    const [notes, setNotes] = useState(() => {
        return JSON.parse(localStorage.getItem("notes")).slice(0, 3) || [];
    })
    const [TotalNotes, setTotalNotes] = useState(() => {
        return JSON.parse(localStorage.getItem("notes")) || [];
    })
    useEffect(() => {
        const startIndex = (pageNumber - 1) * PAGE_LIMIT
        const endIndex = (pageNumber * PAGE_LIMIT)
        const newNotesArr = TotalNotes.slice(startIndex, endIndex)
        const loadPageNotes = () => {
            setNotes(newNotesArr)
        }
        loadPageNotes()
    }, [pageNumber , TotalNotes])
    function DeleteNote(id) { // noteId
        const notes = JSON.parse(localStorage.getItem("notes"))
        const newnotes = notes.filter(note => note.id !== id)
        localStorage.setItem(
            "notes",
            JSON.stringify(newnotes)
        );
        setTotalNotes(newnotes)
    }
    const handleLeftClick = () => {
        if (pageNumber <= 1) {
            return
        }
        setPageNumber(pageNumber - 1)
        console.log(pageNumber);
    }
    const handleRightClick = () => {
        setPageNumber(pageNumber + 1)
        console.log(pageNumber);
    }
    return <>
        <div className="container w-full h-full bg-background p-10 flex flex-col gap-8 justify-start items-start">
            <NavLink to="./add" end>
                <div className="create w-auto h-auto p-4 bg-button hover:bg-button-hover cursor-pointer text-button-text rounded-md ">
                    <button>Add new note</button>
                </div>
            </NavLink>
            <div className="notes flex flex-col gap-2 p-6 w-full h-full bg-primary rounded-lg">
                <div className="notes-container flex-1">
                    {notes.length > 0 ? <ShowNotes
                        notes={notes}
                        onDelete={DeleteNote}
                    /> : <NothingToShow />}
                </div>
                <div className={`notes-page w-full h-auto flex flex-row justify-around items-center p-2  ${notes.length === 0 ? "hidden" : ""}`}>
                    <div className="previous w-auto h-auto">
                        <button
                            onClick={handleLeftClick}
                        >
                            {leftArrow()}
                        </button>
                    </div>
                    <p>Page: {pageNumber}</p>
                    <div className="next">
                        <button
                            onClick={handleRightClick}
                        >
                            {rightArrow()}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>
}