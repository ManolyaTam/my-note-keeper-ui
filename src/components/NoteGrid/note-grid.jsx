import './note-grid.css';
import Note from '../Note/note';
import { notes } from '../../data/notes';
import useNoteFocus from '../../hooks/note-focus.hook';
import React from 'react';

const NoteGrid = () => {
    const focusHook = useNoteFocus();
    return (
        <div className='note-grid'>
            {notes.map((note, index) => {
                return (
                    <Note
                        key={`note#${index}`}
                        color={note.color}
                        date={note.cDate}
                        index={index}
                        {...focusHook}
                    />)
            }
            )}
        </div>
    )
}

export default NoteGrid;