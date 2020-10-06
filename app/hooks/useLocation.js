import * as Location from 'expo-location';
import { useEffect, useState } from 'react';
import logger from '../utils/logger';

export const useLocation = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    requestLocation();
  }, []);

  const requestLocation = async () => {
    try {
      const { granted } = await Location.requestPermissionsAsync();
      if (!granted) return;
      const {
        coords: { latitude, longitude },
      } = await Location.getLastKnownPositionAsync();
      setLocation({ latitude, longitude });
    } catch (e) {
      logger.log('Error Getting Location');
    }
  };

  return location;
};
