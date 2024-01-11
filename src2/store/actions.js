import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { ADD_CONTACT } from './types';

export const addContact = createAction(ADD_CONTACT, (name, number) => {
  const newContact = {
    id: nanoid(),
    name,
    number,
  };

  return { payload: newContact };
});

// PVSYB!!!!!!!!!!!

// export const addContact = (name, number) => {
//   return {
//     type: 'contacts/addContact',
//     payload: {
//       id: nanoid(),
//       name,
//       number,
//     },
//   };
// };

export const deleteContact = createAction('contacts/deleteContact');

// export const deleteContact = contactId => {
//   return {
//     type: 'contacts/deleteContact',
//     payload: contactId,
//   };
// };

export const setFilter = createAction('filter/setFilter');

// export const setFilter = value => {
//   return {
//     type: 'filter/setFilter',
//     payload: value,
//   };
// };
