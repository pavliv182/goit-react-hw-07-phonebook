import { createSlice } from '@reduxjs/toolkit';

const mySlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    add(state, action) {
      if (state.find(el => el.name === action.payload.name)) {
        return;
      }
      state.push(action.payload);
    },
    remove(state, action) {
      return state.filter(el => el.id !== action.payload);
    },
  },
});

export const { add, remove } = mySlice.actions;
export default mySlice.reducer;
