import { useState } from 'react';
import './new-note-form.css';

const NewNoteForm = () => {
    const [popupOpen, setPopupOpen] = useState(false);
    return (
        <div className='new-note-form'>
            <form>
                {!popupOpen ?
                    <button
                        className='open-add-popup-btn'
                        onClick={() => setPopupOpen(true)}
                    >
                        Create a new note...
                    </button>
                    :
                    <div className="new-note">
                        <input className='title-input' placeholder='Title' />
                        <textarea placeholder='Take a note...'></textarea>
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