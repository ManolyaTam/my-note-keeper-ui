import './note.css';
import { DeleteTwoTone } from '@ant-design/icons'
import { useState } from 'react';
import ConfirmDialog from '../Dialog/confirm-dialog';

const Note = (props) => {
    const {
        index, isOpenNote, openNote, closeNote, // focus handler
        color = 'white', title, content, date, // data
        deleteHandler, updateHandler, id // services
    } = props;

    const [noteVals, setNoteVals] = useState({ title, content, date });
    const [showDialog, setShowDialog] = useState(false);
    const [showDelete, setShowDelete] = useState(false);

    const resetHandler = (e) => {
        e.preventDefault();
        closeNote(index)
        setNoteVals({ title, content, date })
    };
    const editHandler = (e) => {
        e.preventDefault();
        closeNote(index);
        updateHandler(id, noteVals); // send title, content, date....
    };
    return (
        <div
            className='note'
            onClick={() => openNote(index)}
            onMouseEnter={() => setShowDelete(true)}
            onMouseLeave={() => setShowDelete(false)}
        >
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
                        readOnly={!isOpenNote(index)}
                        value={noteVals.content}
                        onChange={(e) => setNoteVals({ ...noteVals, content: e.target.value })}
                    />
                    {
                        isOpenNote(index)
                        && <div className='new-note-buttons'>
                            <button type='reset' onClick={resetHandler}>Close</button>
                            <button type='submit' onClick={editHandler}>Edit</button>
                        </div>
                    }
                    {showDelete && <button type='button' className='one-note-delete-btn' onClick={() => setShowDialog(true)}>
                        <DeleteTwoTone twoToneColor="#eb2f96" style={{ fontSize: 16 }} />
                    </button>}
                </div>
            </form>
            {showDialog
                && <ConfirmDialog
                    content={<p>are you sure you want to delete this note?</p>}
                    onConfirm={() => { deleteHandler(id); setShowDialog(false); closeNote() }}
                    onReject={() => { setShowDialog(false); closeNote() }}
                />
            }
        </div>
    )
}

export default Note;