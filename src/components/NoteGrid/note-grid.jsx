import './note-grid.css';
import Note from '../Note/note';
import useNoteFocus from '../../hooks/note-focus.hook';
import { deleteNote, updateNote } from '../../services/CRUD';

const NoteGrid = (props) => {
    const focusHook = useNoteFocus();
    const deleteHandler = (id) => {
        deleteNote(id)
            .then(() => props.fetchNotes())
    }

    const updateHandler = (id, newNote) => {
        updateNote({ id, ...newNote })
            .then(() => props.fetchNotes())
    }

    return (
        <div className='note-grid'>
            {props.notes.map((note, index) => {
                return (
                    <Note
                        key={`note#${index}`}
                        title={note.title}
                        content={note.content}
                        color={note.color}
                        date={note.cDate}
                        index={index}
                        {...focusHook}
                        id={note._id}
                        deleteHandler={deleteHandler}
                        updateHandler={updateHandler}
                    />)
            }
            )}
        </div>
    )
}

export default NoteGrid;