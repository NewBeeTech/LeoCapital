
import Immutable from 'immutable';
import axe from '../lib/axe/src/index';
const ActionHandler = axe.ActionHandler;

const defaultState = Immutable.fromJS({
  isFetching: false,
  errMsg: '',
  detailInfo: Immutable.Map({
    code: 'SH2331',
    name: '啦啦啦啦',
    id: 2,
  }),
});

export default ActionHandler.handleActions(
  [
    
  ],
  defaultState,
  /^HomePageReducer\//,
);
