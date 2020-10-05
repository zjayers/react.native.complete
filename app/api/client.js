import { create } from 'apisauce';
import cache from '../utils/cache';

const apiClient = create({
  baseURL: 'http://127.0.0.1:9000/api',
});

const { get } = apiClient;

// Manipulation to get functionality to apply caching
apiClient.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);

  if (response.ok) {
    await cache.store(url, response.data);
    return response;
  }

  const data = await cache.get(url);

  return data ? { ok: true, data } : response;
};

export default apiClient;
