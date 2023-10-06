import './note-grid.css';
import Note from '../Note/note';
import { getAllNotes } from '../../services/CRUD';
import useNoteFocus from '../../hooks/note-focus.hook';
import React, { useEffect, useState } from 'react';

const NoteGrid = () => {
    const [notes, setNotes] = useState([]);
    const FetchNotes = async () => {
        const fetchedNotes = await getAllNotes();
        setNotes(fetchedNotes);
    }

    useEffect(() => {
        FetchNotes();
    }, [])

    const focusHook = useNoteFocus();
    return (
        <div className='note-grid'>
            {notes.map((note, index) => {
                return (
                    <Note
                        key={`note#${index}`}
                        title={note.title}
                        content={note.content}
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