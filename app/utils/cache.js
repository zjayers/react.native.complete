import dayjs from 'dayjs';
import { AsyncStorage } from 'react-native';
import logger from './logger';

const prefix = 'cache';
const expiryInMinutes = 5;

const store = async (key, value) => {
  try {
    const item = {
      value,
      timestamp: Date.now(),
    };

    // NOTE: Async Storage is deprecated in future releases of React Native
    await AsyncStorage.setItem(prefix + key, JSON.stringify(item));
  } catch (e) {
    logger.log(e);
  }
};

const isExpired = (item) => {
  const now = dayjs();
  const storedTime = dayjs(item.timestamp);

  return now.diff(storedTime, 'minute') > expiryInMinutes;
};

const get = async (key) => {
  try {
    const value = await AsyncStorage.getItem(prefix + key);
    const item = JSON.parse(value);

    if (!item) return null;

    if (isExpired(item)) {
      await AsyncStorage.removeItem(prefix + key);
      return null;
    }

    return item.value;
  } catch (e) {
    return logger.log(e);
  }
};

export default {
  store,
  get,
};
