import { createReducer } from '@reduxjs/toolkit';
import { setState, addContact, setFilter, deleteContact } from './actions';

const initialState = {
  contacts: [],
  filter: '',
};

export const contactsReducer = createReducer(initialState, {
  [setState]: (state, action) => {
    state.contacts = action.payload;
  },
  [addContact]: (state, action) => {
    state.contacts.push(action.payload);
  },
  [deleteContact]: (state, action) => {
    state.contacts = state.contacts.filter(
      contact => contact.id !== action.payload
    );
  },
});

export const filterReducer = createReducer(initialState, {
  [setFilter]: (state, action) => {
    state.filter = action.payload.trim();
  },
});
