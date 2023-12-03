import {REACT_URL} from '../api';
import {addFeedback} from '../features/feedbackSlice';
import {setDeleteOrder, setFoodList, setOrderList} from '../features/foodSlice';

const GetFoodService = foodType => dispatch => {
  REACT_URL.post('/food', foodType)
    .then(res => {
      dispatch(setFoodList(res.data));
    })
    .catch(error => {
      alert(error.message);
    });
};

//add feedback
const PostFeedService = data => dispatch => {
  REACT_URL.post('/feedback', data)
    .then(res => {
      console.log('feedback data', res.data);
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
      console.log('order data', res.data);
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
      console.log('order data', res.data);
      dispatch(setOrderList(res.data));
    })
    .catch(error => {
      alert(error.message);
    });
};

const DeleteFoodService = id => dispatch => {
  REACT_URL.delete(`/deleteprebook/${id}`)
    .then(res => {
      console.log('order data', res.data);
      dispatch(setDeleteOrder(res.data));
      dispatch(GetOrderFoodService())
    })
    .catch(error => {
      alert(error.message);
    });
};

export {
  GetFoodService,
  PostFeedService,
  OrderFoodService,
  GetOrderFoodService,
  DeleteFoodService,
};
