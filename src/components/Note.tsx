import NoteInterface from '../interfaces/Note.interface';
import '../styles/Note.style.sass';
import hashtagExtractor from '../utils/hashtag-extractor';
import { XSquare as CloseIcon, Edit as EditIcon } from 'react-feather';
import { observer } from 'mobx-react';
import { useContext } from 'react';
import { NotesStoreContext } from '../stores/Notes.store';
import NoteEditorModesEnum from '../enums/NoteEditorModes.enum';

const Note = observer((props: NoteInterface) => {
  const notesStoreContext = useContext(NotesStoreContext);

  const hashtags = props.tags ? props.tags : hashtagExtractor(props.text);

  function handleEditButton() {
    notesStoreContext.setEditorMode(NoteEditorModesEnum.EDIT);
    notesStoreContext.setCurrentNote(props);
  }

  function handleDeleteButton() {
    notesStoreContext.deleteNote(props.id);
  }

  return (
    <span className='note-container'>
      <div className='note-actions-container'>
        <div className='note-action'>
          <EditIcon className='note-action-icon' onClick={handleEditButton} />
        </div>
        <div className='note-action'>
          <CloseIcon className='note-action-icon' onClick={handleDeleteButton} />
        </div>
      </div>
      <p className='note-text' dangerouslySetInnerHTML={{ __html: props.text }} />
      {hashtags && (
        <div className='note-tags-container'>
          {hashtags.map((tag) => (
            <span className='note-single-tag'>
              <div className='note-tag-text'>{tag}</div>
            </span>
          ))}
        </div>
      )}
    </span>
  );
});

export default Note;
