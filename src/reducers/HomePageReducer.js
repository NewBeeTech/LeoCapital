
import Immutable from 'immutable';
import axe from '../lib/axe/src/index';
const ActionHandler = axe.ActionHandler;

const defaultState = Immutable.fromJS({
  isFetching: false,
  errMsg: '',
  
});

export default ActionHandler.handleActions(
  [
    
  ],
  defaultState,
  /^HomePageReducer\//,
);
