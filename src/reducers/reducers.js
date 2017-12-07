import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

// 引入各reducers
import HomePageReducer from './HomePageReducer.js';
// 状态入口
const appReducers = combineReducers({
  routing: routerReducer,
  HomePageReducer,
});

export default appReducers;
