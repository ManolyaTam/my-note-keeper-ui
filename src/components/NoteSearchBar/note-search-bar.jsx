import './note-search-bar.css';
import { searchContext } from '../../App';
import { useContext } from 'react';
const NoteSearchBar = () => {
    const { searchParam, setSearchParam } = useContext(searchContext);

    return (
        <div className='note-search-bar'>
            <input
                type="search"
                placeholder='Search'
                value={searchParam}
                onChange={(e) => setSearchParam(e.target.value)}
            />
        </div>
    )
}

export default NoteSearchBar;