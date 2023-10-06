import './note.css';
import { DeleteTwoTone } from '@ant-design/icons'
import { useState } from 'react';
import ConfirmDialog from '../Dialog/confirm-dialog';

const Note = (props) => {
    const { index, isOpenNote, openNote, closeNote, color, title, content } = props;
    const [noteVals, setNoteVals] = useState({ title, content });
    const [showDialog, setShowDialog] = useState(false);
    const [showDelete, setShowDelete] = useState(false);

    const resetHandler = () => { closeNote(index) };
    const editHandler = (e) => {
        e.preventDefault();
        closeNote(index);
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

                    <span className="span-textarea" role="textbox" contentEditable
                        placeholder='Take a note...'
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
                    onConfirm={() => { console.log('confirmed'); setShowDialog(false); closeNote() }}
                    onReject={() => { console.log('rejected'); setShowDialog(false); closeNote() }}
                />
            }
        </div>
    )
}

export default Note;