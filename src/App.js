import './App.css';
import NoteGrid from './components/NoteGrid/note-grid';
import Header from './components/Header/header';
import NewNoteForm from './components/NewNoteForm/new-note-form';

function App() {
  return (
    <div className="App">
      <Header />
      <NewNoteForm />
      <NoteGrid />
    </div>
  );
}

export default App;
