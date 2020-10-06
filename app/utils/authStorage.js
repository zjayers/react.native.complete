import * as SecureStore from 'expo-secure-store';
import jwtDecode from 'jwt-decode';
import logger from './logger';

const key = 'authToken';

const setToken = async (authtoken) => {
  try {
    await SecureStore.setItemAsync(key, authtoken);
  } catch (e) {
    logger.log('Error storing the auth token', e);
  }
};

const getToken = async () => {
  try {
    return await SecureStore.getItemAsync(key);
  } catch (e) {
    logger.log('Error getting the auth token', e);
  }
};

const getUser = async () => {
  const token = await getToken();
  return token ? jwtDecode(token) : null;
};

const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (e) {
    logger.log('Error removing the auth token', e);
  }
};

export default {
  getUser, getToken, removeToken, setToken,
};
