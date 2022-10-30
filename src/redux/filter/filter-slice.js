import { createSlice } from '@reduxjs/toolkit';

const mySlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    addFilterContacts(_, action) {
      return action.payload;
    },
  },
});

export const { addFilterContacts } = mySlice.actions;
export default mySlice.reducer;
