import './note.css';

const Note = (props) => {
    // call color -> className parser
    return (
        <div className={`note ${props.color}`}>
            <h4>{props.title}</h4>
            <p>{props.content}</p>
            <p className='note-date'>{props.date}</p>
        </div>
    )
}

export default Note;