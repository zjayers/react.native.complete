// - Imports
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colors } from '../../theme/colors';

/**
 * AppButton Component
 * @returns {JSX.Element} - JSX to be rendered to the screen
 */
const AppButton = ({ title, onPress, color = 'primary' }) => (
  <TouchableOpacity
    style={[styles.baseContainer, { backgroundColor: colors[color] }]}
    onPress={onPress}
  >
    <Text style={styles.primaryText}>{title}</Text>
  </TouchableOpacity>
);

// - Styles
const styles = StyleSheet.create({
  baseContainer: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    width: '100%',
    marginVertical: 10,
  },
  primaryText: {
    color: colors.white,
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});

// - Exports
export default AppButton;
