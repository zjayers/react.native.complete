// - Imports
import React from "react";
import { StyleSheet, View } from "react-native";
import { colors } from "../../theme/colors";

/**
 * ListItemSeparator Component
 * @returns {JSX.Element} - JSX to be rendered to the screen
 */
const ListItemSeparator = (props) => {
  return <View style={styles.baseContainer} />;
};

// - Styles
const styles = StyleSheet.create({
  baseContainer: {
    width: "100%",
    height: 1,
    backgroundColor: colors.lightGray,
  },
});

// - Exports
export default ListItemSeparator;
