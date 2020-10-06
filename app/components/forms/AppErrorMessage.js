// - Imports
import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import AppText from '../shared/AppText';

/**
 * ErrorMessage Component
 * @returns {JSX.Element} - JSX to be rendered to the screen
 */
const AppErrorMessage = ({ error, visible, style }) => {
  if (!error || !visible) return null;

  return <AppText style={[styles.errorText, style]}>{error}</AppText>;
};

// - Styles
const styles = StyleSheet.create({
  errorText: {
    color: colors.danger,
  },
});

// - Exports
export default AppErrorMessage;
