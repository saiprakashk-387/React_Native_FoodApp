import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  food: [],
  order: [],
  orderItem: {}
};

export const foodSlice = createSlice({
  name: 'food',
  initialState,
  reducers: {
    setFoodList: (state, {payload}) => {
      state.food = payload;
    },
    setOrderList: (state, {payload}) => {
      state.order = payload;
    },
    setDeleteOrder: (state, {payload}) => {
      state.orderItem = payload;
    },
  },
});

export const {setFoodList, setOrderList, setDeleteOrder} = foodSlice.actions;
export default foodSlice.reducer;
