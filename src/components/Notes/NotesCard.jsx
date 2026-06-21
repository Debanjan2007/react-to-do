import { TrashSvg } from '../../assets/trash-svg'

export default function NotesCard({ note , onDelete }) {
    const now = new Date().getTime()
    const noteTime = note?.time ? new Date(note.time).getTime() : now;
    const diffMs = now - noteTime;
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    return (
        <div className="container w-full h-auto bg-background grid grid-cols-[1fr_2fr_auto_auto] items-center gap-3 p-4 text-svg-hover rounded-md">
            <h1 className="text-lg font-medium">
                {note.title}
            </h1>
            <p className="text-md  text-svg">
                {note.description}
            </p>
            <div className="felx justify-end">
                <p className='text-sm text-svg'>
                    updated {diffHours} hours ago
                </p>
            </div>
            <div className="flex justify-end">
                <button 
                onClick={e => { 
                    e.preventDefault()
                    onDelete(note.id)
                }}
                className="bg-delete-btn text-button-text h-10 px-4 rounded-md flex gap-2 flex justify-center items-center">
                    <TrashSvg className="w-4 h-4" />
                    Delete
                </button>
            </div>
        </div>
    );
}