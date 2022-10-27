import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from 'redux/contacts/contacts-operations';

const originalState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

const mySlice = createSlice({
  name: 'contacts',
  initialState: originalState,
  extraReducers: {
    [fetchContacts.pending]: (store, _) => ({
      ...store,
    }),
    [fetchContacts.fulfilled]: ({ contacts }, { payload }) => {
      contacts.items = payload;
    },
    [fetchContacts.rejected]: (store, payload) => {
      console.log('rejected');
    },
  },
  // reducers: {
  //   add(state, action) {
  //     if (state.find(el => el.name === action.payload.name)) {
  //       return;
  //     }
  //     state.push(action.payload);
  //   },
  //   remove(state, action) {
  //     return state.filter(el => el.id !== action.payload);
  //   },
  // },
});

export const { add, remove } = mySlice.actions;
export default mySlice.reducer;
