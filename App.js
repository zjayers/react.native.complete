import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import OfflineNotice from "./app/components/shared/OfflineNotice";
import AppNavigator from "./app/navigation/AppNavigator";
import navigationTheme from "./app/theme/navigationTheme";

export default function App() {
  return (
    <>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        <AppNavigator />
      </NavigationContainer>
    </>
  );
}
