// - Imports
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../../theme/colors";
import AppIcon from "../shared/AppIcon";
import AppText from "../shared/AppText";

/**
 * CategoryPickerItem Component
 * @returns {JSX.Element} - JSX to be rendered to the screen
 */
const CategoryPickerItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.baseContainer} onPress={onPress}>
      <AppIcon
        backgroundColor={item.backgroundColor}
        name={item.icon}
        size={80}
      />
      <AppText style={styles.label}>{item.label}</AppText>
    </TouchableOpacity>
  );
};

// - Styles
const styles = StyleSheet.create({
  baseContainer: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 15,
  },
  label: {
    fontSize: 18,
    color: colors.darkGray,
    marginTop: 5,
    textAlign: "center",
  },
});

// - Exports
export default CategoryPickerItem;
