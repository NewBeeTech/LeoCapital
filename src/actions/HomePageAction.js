import { Toast } from 'antd-mobile';
import Tinker from '../lib/tinker/src/index';
import reduxTinker from '../lib/tinker/src/reduxTinker';
import { dispatch } from '../store';
import { replace, push, goBack } from 'react-router-redux';

/**
 * 股票详情信息
 * @type {String}
 */
export const GET_CAPTIAL = 'GET_CAPTIAL';
export const getCaptial = (params) => {
  const fetchHandler = new Tinker(
    `${APIURL}/api/capital/listRps`,
    {
      method: 'GET',
    },
    params,
  );
  reduxTinker(fetchHandler, GET_CAPTIAL, dispatch).start();
};
