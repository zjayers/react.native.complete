// - Imports
import React from "react";
import { StyleSheet, TouchableHighlight } from "react-native";
import { colors } from "../../theme/colors";
import AppText from "../shared/AppText";

/**
 * PickerItem Component
 * @returns {JSX.Element} - JSX to be rendered to the screen
 */
const PickerItem = ({ item, onPress }) => {
  return (
    <TouchableHighlight
      onPress={onPress}
      style={styles.baseContainer}
      underlayColor={colors.lightGray}
    >
      <AppText style={styles.labelText}>{item.label}</AppText>
    </TouchableHighlight>
  );
};

// - Styles
const styles = StyleSheet.create({
  baseContainer: {
    alignItems: "center",
  },
  labelText: {
    fontSize: 18,
    padding: 20,
  },
});

// - Exports
export default PickerItem;
