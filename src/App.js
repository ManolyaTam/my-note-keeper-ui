import './App.css';
import NoteGrid from './components/NoteGrid/note-grid';
import Header from './components/Header/header';
import NewNoteForm from './components/NewNoteForm/new-note-form';
import { useEffect, useState } from 'react';
import { getAllNotes } from './services/CRUD';

function App() {
  const [notes, setNotes] = useState([]);
  const fetchNotes = async () => {
    const fetchedNotes = await getAllNotes();
    setNotes(fetchedNotes);
  }

  useEffect(() => {
    fetchNotes();
  }, [])

  return (
    <div className="App">
      <Header />
      <NewNoteForm fetchNotes={fetchNotes} />
      <NoteGrid notes={notes} fetchNotes={fetchNotes} />
    </div>
  );
}

export default App;
