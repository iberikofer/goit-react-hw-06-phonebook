import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    // setState(state, action) {
    //   return { ...state, contacts: action.payload };
    // },
    addContact(state, action) {
      state.contacts.push(action.payload);
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
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
