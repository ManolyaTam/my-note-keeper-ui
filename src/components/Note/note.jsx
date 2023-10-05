import './note.css';

const Note = (props) => {
    return (
        <div className='note'>
            <form>
                <div className="inner-note">
                    <input className='title-input' placeholder='Title' />
                    <textarea placeholder='Take a note...'></textarea>
                    <div className='new-note-buttons'>
                        <button>
                            Close
                        </button>
                        <button type='submit'>Create</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Note;