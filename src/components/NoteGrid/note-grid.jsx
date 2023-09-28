import './note-grid.css';
import Note from '../Note/note';
import { notes } from '../../data/notes';

const NoteGrid = () => {
    return (
        <div className='note-grid'>
            {notes.map((note) =>
                <Note
                    title={note.title}
                    content={note.content}
                    color={note.color}
                />
            )}
        </div>
    )
}

export default NoteGrid