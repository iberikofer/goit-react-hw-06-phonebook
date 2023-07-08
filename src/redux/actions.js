import { createAction } from '@reduxjs/toolkit';

export const setState = createAction('SET_STATE');
export const addContact = createAction('ADD_CONTACT');
export const deleteContact = createAction('DELETE_CONTACT');
export const setFilter = createAction('SET_FILTER');
