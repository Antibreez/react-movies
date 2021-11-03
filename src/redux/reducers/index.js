import {combineReducers} from 'redux';
import paginationReducer from './paginationReducer';

export default combineReducers({
  pagination: paginationReducer
})