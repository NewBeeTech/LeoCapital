import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

// 引入各reducers

// 状态入口
const appReducers = combineReducers({
  routing: routerReducer,
});

export default appReducers;
