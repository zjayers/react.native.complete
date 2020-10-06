import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import { useEffect } from 'react';
import expoPushTokensApi from '../api/expoPushTokens';
import logger from '../utils/logger';

const useNotifications = (notificationListener) => {
  useEffect(() => {
    registerForPushNotifications();

    if (notificationListener) Notifications.addListener(notificationListener);
  }, []);

  const registerForPushNotifications = async () => {
    try {
      const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);

      if (!permission.granted) return;

      const token = await Notifications.getExpoPushTokenAsync();
      expoPushTokensApi.register(token);
    } catch (e) {
      logger.log('Error getting push token', e);
    }
  };
};

export default useNotifications;
