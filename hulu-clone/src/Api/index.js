import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

axios.interceptors.request.use(
  (config) => {
    const [url, paramString] = config.url.split('?');
    const params = new URLSearchParams(paramString);
    params.set('api_key', process.env.REACT_APP_TMD_API_KEY);
    return { ...config, url: `${url}?${params.toString()}` };
  },
  (error) => {
    return Promise.reject(error);
  },
);

export const getSource = () => axios.CancelToken.source();

export default axios;
