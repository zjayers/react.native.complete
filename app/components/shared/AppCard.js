// - Imports
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { colors } from "../../theme/colors";
import AppText from "./AppText";

/**
 * AppCard Component
 * @returns {JSX.Element} - JSX to be rendered to the screen
 */
const AppCard = ({ title, subTitle, image }) => {
  return (
    <View style={styles.baseContainer}>
      <Image source={image} style={styles.image} />
      <View style={styles.detailContainer}>
        <AppText style={styles.title} numberOfLines={1}>
          {title}
        </AppText>
        <AppText style={styles.subTitle} numberOfLines={1}>
          {subTitle}
        </AppText>
      </View>
    </View>
  );
};

// - Styles
const styles = StyleSheet.create({
  baseContainer: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  detailContainer: {
    padding: 20,
  },
  title: {
    color: colors.black,
    marginBottom: 6,
  },
  subTitle: {
    fontWeight: "bold",
    color: colors.secondary,
  },
});

// - Exports
export default AppCard;
