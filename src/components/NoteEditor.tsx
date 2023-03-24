import { useContext, useEffect, useRef } from 'react';
import NoteEditorModesEnum from '../enums/NoteEditorModes.enum';
import '../styles/NoteEditor.style.sass';
import { observer } from 'mobx-react';
import { NotesStoreContext } from '../stores/Notes.store';

const NoteEditor = observer(() => {
  const notesStoreContext = useContext(NotesStoreContext);

  const editorMode = notesStoreContext.noteEditorMode;

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  function handleSubmit() {
    switch (editorMode) {
      case NoteEditorModesEnum.CREATE:
        if (textareaRef?.current?.value) {
          notesStoreContext.pushNote(textareaRef.current.value);
          textareaRef.current.value = '';
        }
        break;
      case NoteEditorModesEnum.EDIT:
        if (textareaRef?.current?.value) {
          notesStoreContext.updateCurrentNote(textareaRef.current.value);
          textareaRef.current.value = '';
          notesStoreContext.setEditorMode(NoteEditorModesEnum.CREATE);
        }
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    if (notesStoreContext.notes.length > 0) {
      if (textareaRef?.current) {
        textareaRef.current.value = notesStoreContext.currentNote?.text as string;
      }
    }
  }, [notesStoreContext.currentNote]);

  return (
    <div className='note-editor-container'>
      <h1 className='note-editor-heading'>
        {editorMode === NoteEditorModesEnum.CREATE && 'Write a note'}
        {editorMode === NoteEditorModesEnum.EDIT && 'Editing note'}
      </h1>
      <textarea className='note-editor-input' placeholder='Jot something down' ref={textareaRef} />
      <button className='note-editor-submit-button' onClick={handleSubmit}>
        {editorMode === NoteEditorModesEnum.CREATE && 'Post'}
        {editorMode === NoteEditorModesEnum.EDIT && 'Save'}
      </button>
    </div>
  );
});

export default NoteEditor;
