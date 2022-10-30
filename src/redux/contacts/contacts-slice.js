import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  removeContact,
} from 'redux/contacts/contacts-operations';

const originalState = {
  items: [],
  isLoading: false,
  error: null,
};

const mySlice = createSlice({
  name: 'contacts',
  initialState: originalState,
  extraReducers: {
    [fetchContacts.pending]: (store, _) => ({
      ...store,
      isLoading: true,
      error: null,
    }),
    [fetchContacts.fulfilled]: (store, { payload }) => {
      store.items = payload;
      store.isLoading = false;
    },
    [fetchContacts.rejected]: (store, { payload }) => {
      store.isLoading = false;
      store.error = payload.message;
    },
    [addContact.pending]: (store, _) => ({
      ...store,
      isLoading: true,
      error: null,
    }),
    [addContact.fulfilled]: (store, { payload }) => {
      store.items.push(payload);
      store.isLoading = false;
    },
    [addContact.rejected]: (store, { payload }) => {
      store.isLoading = false;
      store.error = payload.message;
    },
    [removeContact.pending]: (store, _) => ({
      ...store,
      isLoading: true,
      error: null,
    }),
    [removeContact.fulfilled]: (store, { payload }) => {
      store.items = store.items.filter(el => el.id !== payload.id);
      store.isLoading = false;
    },
    [removeContact.rejected]: (store, { payload }) => {
      store.isLoading = false;
      store.error = payload.message;
    },
  },
});

export default mySlice.reducer;
