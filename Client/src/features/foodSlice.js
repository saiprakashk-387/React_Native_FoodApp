import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  food: [],
};

export const foodSlice = createSlice({
  name: 'food',
  initialState,
  reducers: {
    setFoodList: (state, {payload}) => {
      state.food = payload;
    },
  },
});

export const {setFoodList} = foodSlice.actions;
export default foodSlice.reducer;
