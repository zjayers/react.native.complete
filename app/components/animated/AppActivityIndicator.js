// - Imports
import LottieView from 'lottie-react-native';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

/**
 * AppActivityIndicator Component
 * @returns {JSX.Element} - JSX to be rendered to the screen
 */
const AppActivityIndicator = ({ visible = false }) => {
  if (!visible) return null;

  return (
    <View style={styles.overlay}>
      <LottieView
        source={require('../../assets/animations/loader.json')}
        autoPlay
        loop
      />
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    opacity: 0.8,
    backgroundColor: colors.white,
    zIndex: 1,
  },
});

// - Exports
export default AppActivityIndicator;
