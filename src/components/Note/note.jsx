import { useState } from 'react';
import './note.css';

const Note = (props) => {
    const { index, isOpenNote, openNote, closeNote, color, title, content } = props;

    const resetHandler = () => { closeNote(index) };
    const editHandler = () => { };
    const [noteVals, setNoteVals] = useState({ title, content });
    return (
        <div className='note' onClick={() => openNote(index)}>
            <form>
                <div className={`inner-note ${color}`}>
                    <input
                        className='title-input'
                        placeholder='Title'
                        readOnly={!isOpenNote(index)}
                        value={noteVals.title}
                        onChange={(e) => setNoteVals({ ...noteVals, title: e.target.value })}
                    />
                    <textarea
                        placeholder='Take a note...'
                        readOnly={!isOpenNote(index)}
                        value={noteVals.content}
                        onChange={(e) => setNoteVals({ ...noteVals, content: e.target.value })}
                    />
                    {
                        isOpenNote(index)
                        && <div className='new-note-buttons'>
                            <button type='reset' onClick={resetHandler}>Close</button>
                            <button type='submit' onClick={editHandler}>Create</button>
                        </div>
                    }
                </div>
            </form>
        </div>
    )
}

export default Note;