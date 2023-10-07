import './App.css';
import NoteGrid from './components/NoteGrid/note-grid';
import Header from './components/Header/header';
import NewNoteForm from './components/NewNoteForm/new-note-form';
import { createContext, useEffect, useState } from 'react';
import { getAllNotes } from './services/CRUD';

export const searchContext = createContext()

function App() {
  const [notes, setNotes] = useState([]);
  const urlParams = new URLSearchParams(window.location.search);
  const [searchParam, setSearchParam] = useState(urlParams.get('search') || '');

  const fetchNotes = async () => {
    const fetchedNotes = await getAllNotes(searchParam);
    setNotes(fetchedNotes);
  }

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (searchParam.trim().length) {
      urlParams.set('search', searchParam);
      window.history.pushState({}, '', `/?search=${searchParam.toString().trim()}`);
    } else {
      urlParams.delete('search');
      window.history.pushState({}, '', `/?${urlParams.toString().trim()}`);
    }
    fetchNotes(searchParam);
    // eslint-disable-next-line 
  }, [searchParam]); // missing dependency: fetchNotes?

  return (
    <div className="App">
      <searchContext.Provider value={{ searchParam, setSearchParam }}>
        <Header />
        <NewNoteForm fetchNotes={fetchNotes} />
        <NoteGrid notes={notes} fetchNotes={fetchNotes} />
      </searchContext.Provider>
    </div>
  );
}

export default App;
