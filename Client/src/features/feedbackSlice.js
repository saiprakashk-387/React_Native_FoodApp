import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  feedback: [],
};

export const feedbackSlice = createSlice({
  name: 'food',
  initialState,
  reducers: {
    addFeedback: (state, {payload}) => {
      state.food = payload;
    },
  },
});

export const {addFeedback} = feedbackSlice.actions;
export default feedbackSlice.reducer;
