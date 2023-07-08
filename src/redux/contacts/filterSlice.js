import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: '',
  },
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload.trim();
    },
  },
});

export const setFilter = filterSlice.actions.setFilter;
export const filterReducer = filterSlice.reducer;
