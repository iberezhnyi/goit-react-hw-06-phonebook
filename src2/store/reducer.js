// import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, setFilter } from './actions';

const contactsInitialState = [];

export const contactsReducer = createReducer(contactsInitialState, builder => {
  builder
    .addCase(addContact, (state, action) => [...state, action.payload])
    .addCase(deleteContact, (state, action) =>
      state.filter(contact => contact.id !== action.payload)
    );
});

// export const contactsReducer = (state = contactsInitialState, action) => {
//   switch (action.type) {
//     case 'contacts/addContact':
//       return [...state, action.payload];
//     case 'contacts/deleteContact':
//       return state.filter(contact => contact.id !== action.payload);

//     default:
//       return state;
//   }
// };

const filterInitialState = '';

export const filterReducer = createReducer(filterInitialState, builder => {
  builder.addCase(setFilter, (state, action) => action.payload);
});

// export const filterReducer = (state = filterInitialState, action) => {
//   switch (action.type) {
//     case 'filter/setFilter':
//       return action.payload;

//     default:
//       return state;
//   }
// };

// export const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   filter: filterReducer,
// });

// { id: '', name: '', number: '' }
