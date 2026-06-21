import NotesCard from "./NotesCard"

export default function ShowNotes({ notes , onDelete }) {
    return (
        <div className="container w-full h-full flex flex-col overflow-auto gap-4 justify-start items-start p-4">
            {
                notes.map((note) => (
                    <NotesCard
                        key={note.id}
                        note={note}
                        onDelete={onDelete}
                    />
                ))
            }
        </div>
    );
}