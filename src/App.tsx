import NoteEditor from './components/NoteEditor';
import NotesFeed from './components/NotesFeed';
import { Search } from './components/Search';
import { NotesStoreContext, NotesStore } from './stores/Notes.store';

const App = () => {
  return (
    <NotesStoreContext.Provider value={new NotesStore()}>
      <Search />
      <NoteEditor />
      <NotesFeed />
    </NotesStoreContext.Provider>
  );
};

export default App;
