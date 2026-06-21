import { useState } from 'react'

function onAddTodo(title, description) {
    const note = {
        id: Date.now(),
        title,
        description,
        time: new Date().toISOString()
    };

    console.log(note);

    console.log(localStorage.getItem("notes"));    
    let notes = JSON.parse(localStorage.getItem("notes")) || []
    console.log(typeof notes);    
    notes.push(note)
    localStorage.setItem("notes" , JSON.stringify(notes))
}

export default function AddNotesCard() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title.trim() || !description.trim()) {
            return;
        }

        onAddTodo(title, description);

        setTitle("");
        setDescription("");
    };
    return <>
        <div className="container w-full h-full bg-background flex flex-col gap-6 flex-start p-8">
            <div className="add-text text-svg-hover text-4xl  font-medium p-2 h-auto ">
                <h1>Add your note 🚀</h1>
            </div>
            <div className="writing-area flex-1 overflow-auto">
                <div className="form-part w-full">
                    <form
                        className="grid grid-cols-[1fr_auto] gap-3"
                        onSubmit={handleSubmit}
                    >
                        <input
                            type="text"
                            placeholder="Note title..."
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="col-span-2 h-12 border border-svg rounded-md px-4"
                        />

                        <textarea
                            placeholder="Write your note..."
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="min-h-40 border border-svg rounded-md p-4 resize-none"
                        />

                        <button
                            type="submit"
                            className="bg-button px-6 rounded-md text-button-text font-medium hover:bg-button-hover hover:text-button-text-hover"
                        >
                            Add
                        </button>
                    </form>
                </div>
            </div>
        </div >
    </>
}