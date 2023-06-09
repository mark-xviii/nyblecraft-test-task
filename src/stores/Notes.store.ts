import { makeAutoObservable } from 'mobx';
import React from 'react';
import NoteEditorModesEnum from '../enums/NoteEditorModes.enum';
import NoteInterface from '../interfaces/Note.interface';
import NoteType from '../types/Note.type';
import hashtagExtractor from '../utils/hashtag-extractor';
import PersistDataMethods from '../utils/local-storage.util';

export class NotesStore {
  notes: NoteType[] = [];

  currentNote: NoteType | null = null;

  noteEditorMode: NoteEditorModesEnum = NoteEditorModesEnum.CREATE;

  searchTags: string[] = [];

  constructor() {
    makeAutoObservable(this);
    this.notes = PersistDataMethods.getPersistData() as NoteType[];
  }

  getNotes(): NoteInterface[] {
    return this.notes as NoteInterface[];
  }

  pushNote(text: string) {
    this.notes.push({ id: this.notes.length + 1, tags: hashtagExtractor(text) as string[], text: text });
    PersistDataMethods.putPersistData(this.notes);
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

    PersistDataMethods.putPersistData(this.notes);
  }

  setEditorMode(mode: NoteEditorModesEnum) {
    this.noteEditorMode = mode;
  }

  setCurrentNote(note: NoteType) {
    this.currentNote = note;
  }

  setSearchTags(searchQuery: string) {
    const tagsFromQuery = hashtagExtractor(searchQuery);
    this.searchTags = tagsFromQuery ? tagsFromQuery : [];
  }
}

export const NotesStoreContext = React.createContext<NotesStore>(new NotesStore());
