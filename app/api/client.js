import { create } from 'apisauce';
import authStorage from '../utils/authStorage';
import cache from '../utils/cache';

const apiClient = create({
  baseURL: 'http://127.0.0.1:9000/api',
});

// Transform API client to include authentication token
apiClient.addAsyncRequestTransform(async (request) => {
  const authToken = await authStorage.getToken();

  if (!authToken) return;
  request.headers['x-auth-token'] = authToken;
});

// Manipulation to get functionality to apply caching
const { get } = apiClient;
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
