import React, { PropTypes } from 'react';
import * as styles from './styles.css';
import { Toast, SearchBar } from 'antd-mobile';
import { push, goBack } from 'react-router-redux';
import { dispatch } from '../../store';
const logo = require('../../assets/images/home-page-logo.png');
// import Loading from '../../core/decorators/Loading';
// 
// @Loading(props => props.isFetching)
class ShareDetail extends React.PureComponent {
  constructor(props: Object) {
    super(props);
    this.state = {
      chartArr: [
        {value: '1M', name: '1M'}, {value: '3M', name: '3M'}, {value: '6M', name: '6M'}, 
        {value: '1Y', name: '1Y'}, {value: '3Y', name: '3Y'}, {value: '5Y', name: '5Y'}, 
        {value: 'ALL', name: 'ALL'}, 
      ],
      chartValue: '6M',
    };
  }
  render() {
    const showChartArr = (chartArr) => {
      const views = [];
      if(chartArr) {
        chartArr.map(item => {
          views.push(
            <div 
               className={this.state.chartValue == item.value ? styles.chartSelect : styles.chartNomal}
               onClick={() => { this.setState({ chartValue: item.value })}}
            >
               {item.name}
            </div>
          )
        })
      }
      return views;
    }
    return (
      <div className={styles.body}>
          <div className={styles.detailHeader}>
             <div className={styles.detailHeaderLeft}>
                <span>{this.props.detailInfo.get('name') || '空'}</span>
                <br /><span className={styles.detailHeaderBiaohao}>{this.props.detailInfo.get('code')}</span>
              </div>
             <div className={styles.detailHeaderRigth}>2017.10.12更新</div>
          </div>
          
          <div className={styles.detailNum}>
              <span>RPS 0.5: 18%</span>&nbsp;&nbsp;<span>RPS 1.0: 136%</span>
          </div>
          
          <div className={styles.detailContent}>
               <div><span className={styles.detailContentText1}>昨收</span><br /><span className={styles.detailContentText2}>38.90</span></div>
               <div><span className={styles.detailContentText1}>市值</span><br /><span className={styles.detailContentText2}>23131亿</span></div>
               <div><span className={styles.detailContentText1}>市盈率</span><br /><span className={styles.detailContentText2}>10.34</span></div>
               <div><span className={styles.detailContentText1}>换手率</span><br /><span className={styles.detailContentText2}>321%</span></div>
          </div>
          
          <div>
              <div className={styles.chartSearch}>{showChartArr(this.state.chartArr)}</div>
              <div className={styles.chartContent}>k线</div>
              <div className={styles.chartContent}>RPS 0.5 1.0 线</div>
          </div>
      </div>
    );
  }
}

export default ShareDetail;
