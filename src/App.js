import './App.css';
import NoteGrid from './components/NoteGrid/note-grid';
import Header from './components/Header/header';
import NewNoteForm from './components/NewNoteForm/new-note-form';
import { createContext, useEffect, useState } from 'react';
import { getAllNotes } from './services/CRUD';

export const searchContext = createContext()

function App() {
  const [notes, setNotes] = useState([]);
  const [searchParam, setSearchParam] = useState('');

  const fetchNotes = async () => {
    const fetchedNotes = await getAllNotes(searchParam);
    setNotes(fetchedNotes);
  }

  useEffect(() => {
    fetchNotes(searchParam);
    // eslint-disable-next-line
  }, [searchParam])

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
