import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetch, addNewContact, removeNewContact } from 'shared/services/API';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetch();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (data, { rejectWithValue }) => {
    try {
      const newContact = await addNewContact(data);
      return newContact;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
  // {
  //   condition: (data, { getState }) => {
  //     const { contacts } = getState();
  //     const duplicateContact = contacts.items.find(
  //       contact => contact.name === data.name
  //     );
  //     if (duplicateContact) {
  //       alert('This name is already exicited');
  //       return false;
  //     }
  //     return data;
  //   },
  // }
);

export const removeContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      const deletedId = await removeNewContact(id);
      return deletedId;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
