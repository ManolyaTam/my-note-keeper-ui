import './note-grid.css';
import Note from '../Note/note';
import { notes } from '../../data/notes';

const NoteGrid = () => {
    return (
        <div className='note-grid'>
            {notes.map((note, index) =>
                <Note
                    key={`note#${index}`}
                    title={note.title}
                    content={note.content}
                    color={note.color}
                    date={note.cDate}
                />
            )}
        </div>
    )
}

export default NoteGrid