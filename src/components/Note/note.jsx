import './note.css';

const Note = (props) => {
    const { color, date, index, isOpenNote, openNote, closeNote } = props;
    return (
        <div
            className={`note ${color} ${isOpenNote(index) ? 'open-note' : ''}`}
            onClick={() => openNote(index)}
        >
            {props.renderTitle}
            {props.renderContent}
            <p className='note-date'>{date}</p>
            {
                isOpenNote(index) &&
                <div className='open-note-buttons'>
                    <button>&#128465;</button>
                    <button onClick={() => closeNote()}>close</button>
                    <button>Done</button>
                </div>
            }
        </div>
    )
}

export default Note;