import {REACT_URL} from '../api';
import {addFeedback} from '../features/feedbackSlice';
import {
  setAllFoodList,
  setDeleteOrder,
  setFoodList,
  setOrderList,
} from '../features/foodSlice';

const GetFoodService = foodType => dispatch => {
  REACT_URL.post('/food', foodType)
    .then(res => {
      dispatch(setFoodList(res.data));
    })
    .catch(error => {
      alert(error.message);
    });
};
const GetAllFoodListService = () => dispatch => {
  REACT_URL.get('/foodlist')
    .then(res => {
      dispatch(setAllFoodList(res.data));
    })
    .catch(error => {
      alert(error.message);
    });
};

//add feedback
const PostFeedService = data => dispatch => {
  REACT_URL.post('/feedback', data)
    .then(res => {
      dispatch(addFeedback(res.data));
    })
    .catch(error => {
      alert(error.message);
    });
};

//create order
const OrderFoodService = data => dispatch => {
  REACT_URL.post('/prebookfood', data)
    .then(res => {
      dispatch(setOrderList(res.data));
    })
    .catch(error => {
      alert(error.message);
    });
};

//get order details
const GetOrderFoodService = () => dispatch => {
  REACT_URL.get('/getprebookfood')
    .then(res => {
      dispatch(setOrderList(res.data));
    })
    .catch(error => {
      alert(error.message);
    });
};

const DeleteFoodService = id => dispatch => {
  REACT_URL.delete(`/deleteprebook/${id}`)
    .then(res => {
      dispatch(setDeleteOrder(res.data));
      dispatch(GetOrderFoodService());
    })
    .catch(error => {
      alert(error.message);
    });
};

export {
  GetFoodService,
  GetAllFoodListService,
  PostFeedService,
  OrderFoodService,
  GetOrderFoodService,
  DeleteFoodService,
};
