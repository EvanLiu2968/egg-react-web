/**
 * Created by evanliu2968
 * 自定义axios实例
 */
import axios from 'axios';
import { message } from 'antd';
import { loading } from '@/component/loading';
import { getToken } from './auth';

axios.defaults.withCredentials = true

const service = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json;charset=UTF-8' // 'application/json' || 'application/x-www-form-urlencoded'
  },
  withCredentials : true, // 跨域携带cookie
  xsrfCookieName: 'csrfToken', // 用作 xsrf token 的值的cookie的名称
  xsrfHeaderName: 'x-csrf-token', // 承载 xsrf token 的值的 HTTP 头的名称
  timeout: 10000 // 请求超时时间
});

// request拦截器
service.interceptors.request.use(config => {
  // Do something before request is sent
  const token = getToken()
  if (!config.headers['accessToken'] && token) {
    config.headers['accessToken'] =  token; // 让每个请求携带token--['X-Token']为自定义key 请根据实际情况自行修改
  }
  if(config.loading){
    loading.show()
  }
  return config;
}, error => {
  loading.hide()
  console.log(error);
  return Promise.reject(error);
});

// respone拦截器
service.interceptors.response.use(
  response => {
    loading.hide()
    const res = response.data;
    if (res.code !== 0) {
      message.error(res.message || '系统异常');
      // 400:非法请求; 401:未授权;  403:服务器拒绝请求; 404:资源未找到
      if (res.code === 401 || res.code === 403 || res.code === 21) {
        window.location.href = '/admin/login'
      }
      return Promise.reject(res);
    } else {
      return res;
    }
  },
  error => {
    loading.hide()
    console.log(error);
    return Promise.reject(error);
  }
);

export default service