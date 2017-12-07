import React, { PropTypes } from 'react';
import * as styles from './HomePage.css';
import { Toast, SearchBar } from 'antd-mobile';
import { push, goBack } from 'react-router-redux';
import { dispatch } from '../../store';
const logo = require('../../assets/images/home-page-logo.png');
// import Loading from '../../core/decorators/Loading';
// 
// @Loading(props => props.isFetching)
class HomePage extends React.PureComponent {
  render() {
    return (
      <div className={styles.body}>
          <div className={styles.homePageHeader}>
              <img src={logo} className={styles.homePageLogo} />
              <div className={styles.homePageTitle}>乐 傲 投 资</div>
          </div>
          
          <div>
            <SearchBar
              //  value={this.state.value}
               placeholder="请输入股票名称货代码"
               onSubmit={value => console.log(value, 'onSubmit')}
               onClear={value => console.log(value, 'onClear')}
               onFocus={() => console.log('onFocus')}
               onBlur={() => console.log('onBlur')}
               onCancel={() => console.log('onCancel')}
               showCancelButton={false}
               onChange={this.onChange}
             />
          </div>
          
          <div className={styles.tableTh}>
              <div className={styles.tableTh1}>排名</div>
              <div className={styles.tableTh2}>RPS 0.5</div>
              <div className={styles.tableTh3}>RPS 1.0</div>
          </div>
          
          <div className={styles.tableTr}>
              <div>1</div>
              <div>安琪酵母 SH600298</div>
              <div className={styles.tableTr1}>18%</div>
              <div className={styles.tableTr1}>136%</div>
          </div>
      </div>
    );
  }
}

export default HomePage;
