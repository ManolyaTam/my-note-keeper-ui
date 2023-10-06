import './new-note-form.css';
import { useState } from 'react';
import { createNote } from '../../services/CRUD.js'

const NewNoteForm = (props) => {
    const [popupOpen, setPopupOpen] = useState(false);
    const submitHandler = (e) => {
        e.preventDefault();
        setPopupOpen(false);
        const newNote = {
            title: e.target.title.value,
            content: e.target.content.value,
            date: Date.now()
        }
        createNote({ ...newNote })
            .then(() => props.fetchNotes())

    }
    return (
        <div className='new-note-form'>
            <form onSubmit={submitHandler}>
                {!popupOpen ?
                    <button
                        className='open-add-popup-btn'
                        onClick={() => setPopupOpen(true)}
                    >
                        Create a new note...
                    </button>
                    :
                    <div className="new-note">
                        <input
                            name='title'
                            required
                            className='title-input'
                            placeholder='Title'
                        />
                        <textarea
                            name='content'
                            placeholder='Take a note...'
                        />
                        <div className='new-note-buttons'>
                            <button
                                onClick={() => setPopupOpen(false)}
                            >
                                Close
                            </button>
                            <button type='submit'>Create</button>
                        </div>
                    </div>
                }
            </form>
        </div>
    )
}

export default NewNoteForm;