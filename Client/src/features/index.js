import {configureStore} from '@reduxjs/toolkit';
import foodSlice from './foodSlice';
import feedbackSlice from './feedbackSlice';

const store = configureStore({
  reducer: {
    foods: foodSlice,
    feedback: feedbackSlice
  },
  devTools: true,
});

export default store;
