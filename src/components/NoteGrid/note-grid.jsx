import './note-grid.css';
import Note from '../Note/note';
import useNoteFocus from '../../hooks/note-focus.hook';

const NoteGrid = (props) => {

    const focusHook = useNoteFocus();
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
                    />)
            }
            )}
        </div>
    )
}

export default NoteGrid;