import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: { contacts: [] },
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact(state, action) {
      state.contacts.contacts.push(action.payload);
    },
    deleteContact(state, action) {
      state.contacts.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    setFilter(state, action) {
      return { ...state, filter: action.payload.trim() };
    },
  },
});

export const { setState, addContact, deleteContact, setFilter } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

// TODO - separate contacts and filter slices
