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
