// 组合所有组件  root component

import React, { PropTypes } from 'react';
import * as styles from './styles.css';
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
  }
  componentWillReceiveProps(nextProps) {
  }
  render() {
    return (
      <div className={styles.rootContent}>
        {this.props.children}
      </div>
    );
  }
}

RootContainer.propTypes = propTypes;

const mapStateToProps = (state) => {
  return {
  };
};

export default connect(mapStateToProps)(RootContainer);
