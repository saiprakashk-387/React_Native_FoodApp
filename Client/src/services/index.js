import {REACT_URL} from '../api';
import { addFeedback } from '../features/feedbackSlice';
import {setFoodList} from '../features/foodSlice';

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
export {GetFoodService, PostFeedService};
