import './note.css';

const Note = (props) => {
    const { index, isOpenNote, openNote, closeNote } = props;

    const resetHandler = () => { closeNote(index) };
    const editHandler = () => { };

    return (
        <div className='note' onClick={() => openNote(index)}>
            <form>
                <div className="inner-note">
                    <input className='title-input' placeholder='Title' readOnly={!isOpenNote(index)} />
                    <textarea placeholder='Take a note...' readOnly={!isOpenNote(index)}></textarea>
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