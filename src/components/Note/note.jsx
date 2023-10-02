import './note.css';

const Note = (props) => {

    // call color -> className parser?

    const CloseHandler = (e) => {
        e.stopPropagation();
        props.closeNote();
    }

    return (
        <div
            className={`note ${props.color} ${props.isSelected ? 'open-note' : ''}`}
            onClick={props.openNote}
        >
            <h4>{props.title}</h4>
            <p className='note-content'>{props.content}</p>
            <p className='note-date'>{props.date}</p>
            {
                props.isSelected &&
                <div className='open-note-buttons'>
                    <button onClick={CloseHandler}>close</button>
                    <button>Done</button>
                </div>
            }
        </div>
    )
}

export default Note;