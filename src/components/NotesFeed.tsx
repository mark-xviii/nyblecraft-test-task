import Note from './Note';
import '../styles/NotesFeed.style.sass';
import { observer } from 'mobx-react';
import { useContext } from 'react';
import { NotesStoreContext } from '../stores/Notes.store';

const NotesFeed = observer(() => {
  const notesStoreContext = useContext(NotesStoreContext);

  return (
    <div className='notes-feed-container'>
      {notesStoreContext.getNotes().map((note) => (
        <Note id={note.id} text={note.text} tags={note.tags} />
      ))}
    </div>
  );
});

export default NotesFeed;
