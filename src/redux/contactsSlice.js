import { nanoid } from 'nanoid';
import { createSlice } from '@reduxjs/toolkit';

import data from '../data/contacts';

const items = data.map(contact => {
  contact.id = nanoid();
  return contact;
});

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items,
  },
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
