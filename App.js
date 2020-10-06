import { NavigationContainer } from '@react-navigation/native';
import { AppLoading } from 'expo';
import React, { useState } from 'react';
import OfflineNotice from './app/components/shared/OfflineNotice';
import AuthContext from './app/context/AuthContext';
import AppNavigator from './app/navigation/AppNavigator';
import AuthNavigator from './app/navigation/AuthNavigator';
import navigationTheme from './app/theme/navigationTheme';
import authStorage from './app/utils/authStorage';

export default function App() {
  const [user, setUser] = useState(null);
  const [appReady, setAppReady] = useState(false);

  const restoreUser = async () => {
    const restoredUser = await authStorage.getUser();
    if (restoredUser) setUser(user);
  };

  if (!appReady) return <AppLoading startAsync={restoreUser} onFinish={() => setAppReady(true)} />;

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
