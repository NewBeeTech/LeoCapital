// 组合所有组件  root component

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import shallowCompare from 'react-addons-shallow-compare';
import { replace } from 'react-router-redux';
import { dispatch } from '../store';

const propTypes = {
  children: PropTypes.node,
  dispatch: PropTypes.func,
  openid: PropTypes.string,
};

class RootContainer extends React.PureComponent {
  componentWillMount() {
    try {
      if (this.props.location.pathname === '/') {
        dispatch(replace('/login'))
      }
    } catch(e) {
    }
  }
  componentWillReceiveProps(nextProps) {
    try {
      if (nextProps.location.pathname === '/') {
        dispatch(replace('/login'))
      }
    } catch(e) {
    }
  }
  render() {
    return (
      <div style={{ width: '100vw', height: '100vh', backgroundColor: '#f4f4f4' }}>
        {this.props.children}
      </div>
    );
  }
}

RootContainer.propTypes = propTypes;

const mapStateToProps = (state) => {
  return {
    isLogin: state.LoginReducer.get('isLogin'),
  };
};

export default connect(mapStateToProps)(RootContainer);
