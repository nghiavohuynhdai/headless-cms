import { combineReducers } from 'redux';
import blogReducer from './blog/reducer'
import practiceReducer from "./mock-data/reducer"

const rootReducer = combineReducers({
  blog: blogReducer,
  practice: practiceReducer
});

export default rootReducer;