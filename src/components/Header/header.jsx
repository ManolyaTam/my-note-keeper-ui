import './header.css';
import NoteSearchBar from '../NoteSearchBar/note-search-bar';

const Header = () => {
    return (
        <div className='header'>
            <h2>My Note Keeper</h2>
            <NoteSearchBar />
        </div>
    )
}

export default Header;