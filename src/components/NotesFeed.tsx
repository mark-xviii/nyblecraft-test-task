import Note from './Note';
import '../styles/NotesFeed.style.sass';
import { observer } from 'mobx-react';
import { useContext } from 'react';
import { NotesStoreContext } from '../stores/Notes.store';
import { arrayIncludesOtherArray } from '../utils/array-comparison.util';
import NoteInterface from '../interfaces/Note.interface';

const NotesFeed = observer(() => {
  const notesStoreContext = useContext(NotesStoreContext);

  function mappingConsideringSearch(note: NoteInterface) {
    if (notesStoreContext.searchTags.length === 0) {
      return <Note id={note.id} tags={note.tags} text={note.text} />;
    }

    if (note.tags && notesStoreContext.searchTags.length > 0) {
      if (arrayIncludesOtherArray(note.tags, notesStoreContext.searchTags)) {
        return <Note id={note.id} tags={note.tags} text={note.text} />;
      }
    }

    if (!note.tags) {
      return <Note id={note.id} tags={note.tags} text={note.text} />;
    }
  }

  return <div className='notes-feed-container'>{notesStoreContext.getNotes()?.map(mappingConsideringSearch)}</div>;
});

export default NotesFeed;
