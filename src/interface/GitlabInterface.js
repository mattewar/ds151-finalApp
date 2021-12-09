import axios from 'axios';
import { getToken } from './StorageInterface'

const gitlab = axios.create({
  baseURL: 'https://gitlab.com/api/v4/'
});

gitlab.interceptors.request.use(
  async (config) => {
    const access_token = await getToken();
    if (access_token) {
      config.headers.Authorization = `Bearer ${access_token}`;
    }
    return (config);
  },
  (err) => {
    return Promise.reject(err);
  }
)

export default gitlab;
