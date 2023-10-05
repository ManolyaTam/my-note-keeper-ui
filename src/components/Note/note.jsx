import { useState } from 'react';
import ConfirmDialog from '../Dialog/confirm-dialog';
import './note.css';

const Note = (props) => {
    const { index, isOpenNote, openNote, closeNote, color, title, content } = props;
    const [noteVals, setNoteVals] = useState({ title, content });
    const [showDialog, setShowDialog] = useState(false);

    const resetHandler = () => { closeNote(index) };
    const editHandler = (e) => {
        e.preventDefault();
        setShowDialog(true);
    };
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
            {showDialog
                && <ConfirmDialog
                    message='are you sure you want to delete this note?'
                    onConfirm={() => { console.log('confirmed'); setShowDialog(false); closeNote() }}
                    onReject={() => { console.log('rejected'); setShowDialog(false); closeNote() }}
                />
            }
        </div>
    )
}

export default Note;