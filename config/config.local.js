const host = '0.0.0.0';
const APIURL = '';
const proxyURL = ''; // 本地代理请求地址
module.exports = {
  host: host,
  port: '3030',
  proxyURL: proxyURL,
  app: {
    ENV: JSON.stringify('local'),
    APIURL: JSON.stringify(''),
  },
};
