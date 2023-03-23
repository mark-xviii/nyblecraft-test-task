import NotesFeedInterface from '../interfaces/NotesFeed.interface';
import Note from './Note';
import '../styles/NotesFeed.style.sass';

export default function NotesFeed(props: NotesFeedInterface) {
  return (
    <div className='notes-feed-container'>
      {props.notes.map((note) => (
        <Note text={note.text} />
      ))}
    </div>
  );
}
