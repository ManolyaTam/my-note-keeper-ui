import './note-grid.css';
import Note from '../Note/note';
import { notes } from '../../data/notes';
import { useState } from 'react';

const NoteGrid = () => {
    const [openNote, setOpenNote] = useState(-1);

    return (
        <div className='note-grid'>
            {notes.map((note, index) =>
                <Note
                    isSelected={openNote === index}
                    closeNote={() => setOpenNote(-1)}
                    key={`note#${index}`}
                    title={note.title}
                    content={note.content}
                    color={note.color}
                    date={note.cDate}
                    openNote={() => setOpenNote(index)}
                />
            )}
        </div>
    )
}

export default NoteGrid