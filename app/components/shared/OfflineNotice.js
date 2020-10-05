// - Imports
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Constants from 'expo-constants/src/Constants';
import { useNetInfo } from '@react-native-community/netinfo';
import { colors } from '../../theme/colors';
import AppText from './AppText';

/**
 * OfflineNotice Component
 * @returns {JSX.Element} - JSX to be rendered to the screen
 */
const OfflineNotice = (props) => {
  const netInfo = useNetInfo();

  if (netInfo.type !== 'unknown' && netInfo.isInternetReachable === false) {
    return (
      <View style={styles.baseContainer}>
        <AppText style={styles.text}>No Internet Connection</AppText>
      </View>
    );
  }

  return null;
};

// - Styles
const styles = StyleSheet.create({
  baseContainer: {
    backgroundColor: colors.primary,
    height: 50,
    position: 'absolute',
    zIndex: 1,
    width: '100%',
    top: Constants.statusBarHeight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: colors.white,
    fontWeight: '600',
    fontSize: 18,
  },
});

// - Exports
export default OfflineNotice;
