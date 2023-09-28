import './App.css';
import Note from './components/Note/note';
function App() {
  return (
    <div className="App">
      <Note
        heading='first note'
        note='this is a test'
        color='green'
      />
    </div>
  );
}

export default App;
