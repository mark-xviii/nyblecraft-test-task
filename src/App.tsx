import NotesFeed from './components/NotesFeed';
import NoteInterface from './interfaces/Note.interface';

function App() {
  const notesExample: NoteInterface[] = [
    { text: 'Hello Kitty!<br> #sanrio' },
    { text: 'Съешь ещё этих мягких французских булок да выпей чаю!<br> #french_cuisine #luxury #роскошь_поражает' },
    { text: 'Съешь ещё этих мягких французских булок да выпей чаю!<br> #french_cuisine #luxury #роскошь_поражает' },
    { text: 'Съешь ещё этих мягких французских булок да выпей чаю!<br> #french_cuisine #luxury #роскошь_поражает' },
    { text: 'Съешь ещё этих мягких французских булок да выпей чаю!<br> #french_cuisine #luxury #роскошь_поражает' },
    { text: 'Hello Kitty!<br> #sanrio' },
    { text: 'Hello Kitty!<br> #sanrio' },
  ];

  return (
    <>
      <NotesFeed notes={notesExample} />
    </>
  );
}

export default App;
