import NoteInterface from '../interfaces/Note.interface';
import '../styles/Note.style.sass';
import hashtagExtractor from '../utils/hashtag-extractor';

export default function Note(props: NoteInterface) {
  const hashtags = hashtagExtractor(props.text);

  return (
    <span className='note-container'>
      <p className='note-text' dangerouslySetInnerHTML={{ __html: props.text }} />
      {hashtags && (
        <div className='note-tags-container'>
          {hashtags.map((tag) => (
            <span className='note-single-tag'>
              <div className='note-tag-border-left' />
              <div className='note-tag-text'>{tag}</div>
              <div className='note-tag-border-right' />
            </span>
          ))}
        </div>
      )}
    </span>
  );
}
