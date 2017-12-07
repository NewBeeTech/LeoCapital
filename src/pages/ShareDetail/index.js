// 股票详情
import { connect } from 'react-redux';
import ShareDetail from './ShareDetail';

const mapStateToProps = (state) => ({
  dispatch: state.dispatch,
  // errMsg: state.LoginReducer.get('errMsg'),
  // isFetching: state.LoginReducer.get('isFetching'),
});

export default connect(mapStateToProps)(ShareDetail);