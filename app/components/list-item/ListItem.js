// - Imports
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Image, StyleSheet, TouchableHighlight, View } from "react-native";

import Swipeable from "react-native-gesture-handler/Swipeable";
import { colors } from "../../theme/colors";
import AppText from "../shared/AppText";

/**
 * ListItem Component
 * @returns {JSX.Element} - JSX to be rendered to the screen
 */
const ListItem = ({
  image,
  title,
  subTitle,
  onPress,
  rightActions,
  IconComponent,
}) => {
  return (
    <Swipeable renderRightActions={rightActions}>
      <TouchableHighlight onPress={onPress} underlayColor={colors.lightGray}>
        <View style={styles.baseContainer}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            {title && (
              <AppText style={styles.title} numberOfLines={1}>
                {title}
              </AppText>
            )}
            {subTitle && (
              <AppText style={styles.subTitle} numberOfLines={1}>
                {subTitle}
              </AppText>
            )}
          </View>
          <MaterialCommunityIcons
            name={"chevron-right"}
            size={25}
            color={colors.mediumGray}
          />
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

// - Styles
const styles = StyleSheet.create({
  baseContainer: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white,
    alignItems: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center",
    flex: 1,
  },
  title: {
    fontWeight: "500",
    fontSize: 18,
  },
  subTitle: {
    color: colors.mediumGray,
  },
});

// - Exports
export default ListItem;
