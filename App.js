import { NavigationContainer } from '@react-navigation/native';
import { AppLoading } from 'expo';
import React, { useState } from 'react';
import OfflineNotice from './app/components/shared/OfflineNotice';
import AuthContext from './app/context/AuthContext';
import AppNavigator from './app/navigation/AppNavigator';
import AuthNavigator from './app/navigation/AuthNavigator';
import { navigationRef } from './app/navigation/rootNavigation';
import navigationTheme from './app/theme/navigationTheme';
import authStorage from './app/utils/authStorage';
import logger from './app/utils/logger';

// Start Logger - No API key has been provided so the line is commented out
// logger.start();

export default function App() {
  const [user, setUser] = useState(null);
  const [appReady, setAppReady] = useState(false);

  const restoreUser = async () => {
    const restoredUser = await authStorage.getUser();
    if (restoredUser) setUser(restoredUser);
  };

  if (!appReady) return <AppLoading startAsync={restoreUser} onFinish={() => setAppReady(true)} />;

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer ref={navigationRef} theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
