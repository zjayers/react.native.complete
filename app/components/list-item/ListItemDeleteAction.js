// - Imports
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";

import { colors } from "../../theme/colors";

/**
 * ListItemDeleteAction Component
 * @returns {JSX.Element} - JSX to be rendered to the screen
 */
const ListItemDeleteAction = ({ onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.baseContainer}>
        <MaterialCommunityIcons
          name={"trash-can"}
          size={35}
          color={colors.white}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

// - Styles
const styles = StyleSheet.create({
  baseContainer: {
    backgroundColor: colors.danger,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },
});

// - Exports
export default ListItemDeleteAction;
