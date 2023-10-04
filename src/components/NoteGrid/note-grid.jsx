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
                let renderTitle, renderContent;
                if (focusHook.isOpenNote(index)) {
                    renderTitle = React.createElement('input', { value: note.title, onChange: (e) => console.log(e.target.value) }) // help me add note title here
                } else {
                    renderTitle = <h4>{note.title}</h4>
                    renderContent = <p className='note-content'>{note.content}</p>
                }
                return (
                    <Note
                        key={`note#${index}`}
                        renderTitle={renderTitle}
                        renderContent={renderContent}
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