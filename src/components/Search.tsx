import { observer } from 'mobx-react-lite';
import { useContext, useRef } from 'react';
import { NotesStoreContext } from '../stores/Notes.store';
import '../styles/Search.styles.sass';

export const Search = observer(() => {
  const notesStoreContext = useContext(NotesStoreContext);

  const inputRef = useRef<HTMLInputElement>(null);

  function handleInputChange() {
    if (inputRef?.current?.value) {
      notesStoreContext.setSearchTags(inputRef.current.value);
    }
  }

  return (
    <div className='search-container'>
      <input
        className='search-input'
        ref={inputRef}
        onChange={handleInputChange}
        placeholder='Looking for something? Search with  #tags!'
      />
    </div>
  );
});
