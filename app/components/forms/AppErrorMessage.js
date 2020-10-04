// - Imports
import React from "react";
import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";
import AppText from "../shared/AppText";

/**
 * ErrorMessage Component
 * @returns {JSX.Element} - JSX to be rendered to the screen
 */
const AppErrorMessage = ({ error, visible }) => {
  if (!error || !visible) return null;

  return <AppText style={styles.errorText}>{error}</AppText>;
};

// - Styles
const styles = StyleSheet.create({
  errorText: {
    marginLeft: 20,
    color: colors.danger,
  },
});

// - Exports
export default AppErrorMessage;
