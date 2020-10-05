// - Imports
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { fontStyle } from '../../theme/font';

/**
 * AppText Component
 * @returns {JSX.Element} - JSX to be rendered to the screen
 */
const AppText = ({ children, style, ...otherProps }) => (
  <Text style={[styles.text, style]} {...otherProps}>
    {children}
  </Text>
);

// - Styles
const styles = StyleSheet.create({
  text: {
    ...fontStyle,
  },
});

// - Exports
export default AppText;
