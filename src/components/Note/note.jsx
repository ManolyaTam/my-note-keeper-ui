import './note.css';

const Note = (props) => {
    // call color -> className parser
    return (
        <div className={`note ${props.color}`}>
            <h4>{props.title}</h4>
            {props.content}
        </div>
    )
}

export default Note;