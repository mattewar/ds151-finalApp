import axios from 'axios';
import { getToken } from './StorageInterface'

const nasa = axios.create({
  baseURL: 'https://api.nasa.gov/'
});

nasa.interceptors.request.use(
  async (config) => {
    const access_token = await getToken();
    config.params = {...config.params, api_key: access_token}
    return (config);
  },
  (err) => {
    return Promise.reject(err);
  }
)

export default nasa;
