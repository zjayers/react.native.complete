// - Imports
import LottieView from 'lottie-react-native';
import React from 'react';

/**
 * AppActivityIndicator Component
 * @returns {JSX.Element} - JSX to be rendered to the screen
 */
const AppActivityIndicator = ({ visible = false }) => {
  if (!visible) return null;

  return (
    <LottieView
      source={require('../../assets/animations/loader.json')}
      autoPlay
      loop
    />
  );
};

// - Exports
export default AppActivityIndicator;
