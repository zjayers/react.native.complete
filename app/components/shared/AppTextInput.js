// - Imports
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { colors } from "../../theme/colors";
import { fontStyle } from "../../theme/font";

/**
 * AppTextInput Component
 * @returns {JSX.Element} - JSX to be rendered to the screen
 */
const AppTextInput = ({ icon, width = "100%", ...otherProps }) => {
  return (
    <View style={[styles.baseContainer, { width }]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={colors.mediumGray}
          style={styles.icon}
        />
      )}
      <TextInput style={styles.inputText} {...otherProps} />
    </View>
  );
};

// - Styles
const styles = StyleSheet.create({
  baseContainer: {
    backgroundColor: colors.lightGray,
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
  inputText: {
    fontSize: 18,
    color: colors.darkGray,
    ...fontStyle,
  },
});

// - Exports
export default AppTextInput;
