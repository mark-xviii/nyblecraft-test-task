import { makeAutoObservable } from 'mobx';
import React from 'react';
import NoteEditorModesEnum from '../enums/NoteEditorModes.enum';
import NoteInterface from '../interfaces/Note.interface';
import NoteType from '../types/Note.type';
import hashtagExtractor from '../utils/hashtag-extractor';

export class NotesStore {
  notes: NoteType[] = [];

  currentNote: NoteType | null = null;

  noteEditorMode: NoteEditorModesEnum = NoteEditorModesEnum.CREATE;

  constructor() {
    makeAutoObservable(this);
  }

  getNotes(): NoteInterface[] {
    return this.notes as NoteInterface[];
  }

  pushNote(text: string) {
    return this.notes.push({ id: this.notes.length + 1, tags: hashtagExtractor(text) as string[], text: text });
  }

  updateCurrentNote(text: string) {
    const noteIndexToUpdate = this.notes.findIndex((note) => note.id === this.currentNote?.id);

    return this.notes.splice(noteIndexToUpdate, 1, {
      id: this.currentNote?.id,
      text: text,
      tags: hashtagExtractor(text) as string[],
    });
  }

  deleteNote(noteId: number) {
    if (noteId === this.currentNote?.id) {
      alert('No way you can do this while editing!!!');
      return;
    }

    const noteIndexToRemove = this.notes.findIndex((note) => note.id === noteId);
    this.notes.splice(noteIndexToRemove, 1);
  }

  setEditorMode(mode: NoteEditorModesEnum) {
    this.noteEditorMode = mode;
  }

  setCurrentNote(note: NoteType) {
    this.currentNote = note;
  }
}

export const NotesStoreContext = React.createContext<NotesStore>(new NotesStore());
