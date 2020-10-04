// - Imports
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";
import { colors } from "../../theme/colors";

/**
 * AppIcon Component
 * @returns {JSX.Element} - JSX to be rendered to the screen
 */
const AppIcon = ({
  name,
  size = 40,
  backgroundColor = "black",
  iconColor = "white",
}) => {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: colors[backgroundColor],
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons
        name={name}
        size={size / 2}
        color={colors[iconColor]}
      />
    </View>
  );
};

// - Styles
const styles = StyleSheet.create({
  baseContainer: {},
  primaryText: {
    fontSize: 30,
  },
});

// - Exports
export default AppIcon;
