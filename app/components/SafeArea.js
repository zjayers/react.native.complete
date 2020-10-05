// - Imports
import Constants from 'expo-constants';
import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';

/**
 * MessagesScreen Component
 * @returns {JSX.Element} - JSX to be rendered to the screen
 */
const SafeArea = ({ children, style }) => (
  <SafeAreaView style={styles.baseContainer}>
    <View style={[styles.innerContainer, style]}>{children}</View>
  </SafeAreaView>
);

// - Styles
const styles = StyleSheet.create({
  baseContainer: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
  innerContainer: {
    flex: 1,
  },
});

// - Exports
export default SafeArea;
