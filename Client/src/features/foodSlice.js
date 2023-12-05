import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  food: [],
  foodList: [],
  order: [],
  orderItem: {},
};

export const foodSlice = createSlice({
  name: 'food',
  initialState,
  reducers: {
    setFoodList: (state, {payload}) => {
      state.food = payload;
    },
    setAllFoodList: (state, {payload}) => {
      state.foodList = payload;
    },
    setOrderList: (state, {payload}) => {
      state.order = payload;
    },
    setDeleteOrder: (state, {payload}) => {
      state.orderItem = payload;
    },
  },
});

export const {setFoodList, setAllFoodList, setOrderList, setDeleteOrder} =
  foodSlice.actions;
export default foodSlice.reducer;
