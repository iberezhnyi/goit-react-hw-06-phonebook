import { devToolsEnhancer } from '@redux-devtools/extension';
import { createStore } from 'redux';
import { rootReducer } from './reducer';

const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);

console.log(store.getState());

// const reducer = (state, action) => {
//   if (action.type === 'contacts') {
//     return {
//       ...state,
//       contacts: [...state.contacts, action.payload],
//     };
//   } else if (action.type === 'filter') {
//     return {
//       ...state,
//       filter: action.payload,
//     };
//   }
//   return state;
// };

// export const store = createStore(rootReducer, initialState);

// store.dispatch({
//   type: 'contacts',
//   payload: { id: 'www', name: 'qqq', number: '123' },
// });

// store.dispatch({
//   type: 'filter',
//   payload: 'huuh',
// });

// console.log(store.getState());

// { id: '', name: '', number: '' }
