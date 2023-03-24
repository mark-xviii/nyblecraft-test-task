import NoteEditor from './components/NoteEditor';
import NotesFeed from './components/NotesFeed';
import { NotesStoreContext, NotesStore } from './stores/Notes.store';

const App = () => {
  return (
    <NotesStoreContext.Provider value={new NotesStore()}>
      <NoteEditor />
      <NotesFeed />
    </NotesStoreContext.Provider>
  );
};

export default App;
