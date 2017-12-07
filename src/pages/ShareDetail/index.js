// 股票详情
import { connect } from 'react-redux';
import ShareDetail from './ShareDetail';

const mapStateToProps = (state) => ({
  dispatch: state.dispatch,
  detailInfo: state.HomePageReducer.get('detailInfo')
});

export default connect(mapStateToProps)(ShareDetail);