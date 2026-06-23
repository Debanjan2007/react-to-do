import NothingToShow from "../Notes/NonotesShow.jsx"
import ShowNotes from '../Notes/NoteShow.jsx'
import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { leftArrow } from '../../assets/left-arrow-svg.jsx'
import { rightArrow } from '../../assets/right-arrow-svg.jsx'
import { searchSvg } from '../../assets/search-svg.jsx'
import { SearchNote } from '../hooks/Search.js'

export default function NotesUi() {
    const PAGE_LIMIT = 3
    const [pageNumber, setPageNumber] = useState(1)
    const [notes, setNotes] = useState(() => {
        return JSON.parse(localStorage.getItem("notes")).slice(0, 3) || [];
    })
    const [TotalNotes, setTotalNotes] = useState(() => {
        return JSON.parse(localStorage.getItem("notes")) || [];
    })
    const [searchItem, setSearhItem] = useState("")
    const TotalPages = Math.ceil(TotalNotes.length / PAGE_LIMIT)
    useEffect(() => {
        const startIndex = (pageNumber - 1) * PAGE_LIMIT
        const endIndex = (pageNumber * PAGE_LIMIT)
        const newNotesArr = TotalNotes.slice(startIndex, endIndex)
        const loadPageNotes = () => {
            setNotes(newNotesArr)
        }
        loadPageNotes()
    }, [pageNumber, TotalNotes])
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
    const handleSearchOnchange = (e) => {
        if(e.target.value == "") return
        setSearhItem(e.target.value)
    }
    const handleSearch = () => {
        const noteArr = SearchNote(searchItem , TotalNotes)
        setNotes(noteArr)
    }
    
    return <>
        <div className="container w-full h-full bg-background p-10 flex flex-col gap-8 justify-start items-start">
            <div className="notes-action-tab w-full h-auto flex flex-row gap-2 ">
                <NavLink to="./add" end>
                    <div className="create w-auto h-auto p-4 bg-button hover:bg-button-hover cursor-pointer text-button-text rounded-md ">
                        <button>Add new note</button>
                    </div>
                </NavLink>
                <div className="search-option flex-1 flex flex-row rounded-md items-center">
                    <div className="input flex-1">
                        <input
                            type="text"
                            name="search" id=""
                            placeholder="search your note...."
                            className="pl-2 pr-2 w-full h-12 bg-primary rounded-tl-md rounded-bl-md border-r-1 border-[#5d666e]"
                            value={searchItem}
                            onChange={handleSearchOnchange}
                        />
                    </div>
                    <div className="search text-ui-text pl-4 pr-4 h-12 bg-primary flex jutify-center items-center rounded-tr-md rounded-br-md">
                        <button 
                        className="w-ful h-full"
                        onClick={handleSearch}
                        >{searchSvg()}</button>
                        </div>
                </div>
            </div>
            <div className="notes flex flex-col gap-2 p-6 w-full h-full bg-primary rounded-lg">
                <div className="notes-container flex-1">
                    {notes.length > 0 ? <ShowNotes
                        notes={notes}
                        onDelete={DeleteNote}
                    /> : <NothingToShow />}
                </div>
                <div className={`notes-page w-full h-auto flex flex-row justify-around items-center p-2  ${notes.length === 0 ? "hidden" : ""}`}>
                    <div className={`previous w-auto h-auto ${pageNumber === 1 ? "text-fade-text" : "text-ui-text"}`}>
                        <button
                            onClick={handleLeftClick}
                        >
                            {leftArrow()}
                        </button>
                    </div>
                    <p>Page: {pageNumber}</p>
                    <div className={`next w-auto h-auto ${TotalPages == pageNumber ? "text-fade-text" : "text-ui-text"}`}>
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