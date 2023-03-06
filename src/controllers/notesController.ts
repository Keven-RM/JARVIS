import { Document } from 'mongoose';
import Note from '../models/notes'

export interface NoteType extends Document {
  id?: string;
  title: string;
  content: string;
  completed?: boolean;
}

async function NotesfindAll() {
  try {
    const notes = await Note.find();
    return notes
  } catch (error) {
    return error;
  }
}

async function NotesfindOne(params: NoteType) {
  try {
    const notes = await Note.findOne({ id: params.id });
    return notes
  } catch (error) {
    return error;
  }
}

async function NotesAdd(params: NoteType) {
  try {
    const { title, content, completed } = params;
    const note = new Note({ title, content, completed });
    await note.save();
  } catch (error) {
    return error
  }
}

async function NotesUpdate(params: NoteType) {
  try {
    const { id, title, content, completed } = params;
    const note = await Note.findByIdAndUpdate(id, { title, content, completed }, { new: true });
    return note;
  } catch (error) {
    return error
  }
}

async function NotesRemove(params: NoteType) {
  try {
    const { id } = params;
    await Note.findByIdAndDelete(id);
  } catch (error) {
    return error;
  }
}

export { NotesfindAll, NotesfindOne, NotesAdd, NotesUpdate, NotesRemove }