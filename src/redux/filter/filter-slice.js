import { createSlice } from '@reduxjs/toolkit';

const mySlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    addFilterContacts(state, action) {
      return action.payload;
    },
  },
});

export const { addFilterContacts } = mySlice.actions;
export default mySlice.reducer;
