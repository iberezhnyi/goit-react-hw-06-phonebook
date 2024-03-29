import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (state, action) => action.payload,
  },
});

export const filterReducer = filterSlice.reducer;
export const { setFilter } = filterSlice.actions;
export const getFilter = state => state.filter;
