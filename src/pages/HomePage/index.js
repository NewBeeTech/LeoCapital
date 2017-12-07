// 首页
import { connect } from 'react-redux';
import HomePage from './HomePage';

const mapStateToProps = (state) => ({
  dispatch: state.dispatch,
  // errMsg: state.LoginReducer.get('errMsg'),
  // isFetching: state.LoginReducer.get('isFetching'),
});

export default connect(mapStateToProps)(HomePage);