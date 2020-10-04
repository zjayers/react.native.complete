// - Imports
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import AppText from "../components/shared/AppText";
import ListItem from "../components/list-item/ListItem";
import { colors } from "../theme/colors";

/**
 * ListingDetailsScreen Component
 * @returns {JSX.Element} - JSX to be rendered to the screen
 */
const ListingDetailsScreen = (props) => {
  return (
    <View style={styles.baseContainer}>
      <Image
        source={require("../assets/img/jacket.jpg")}
        style={styles.image}
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red Jacket</AppText>
        <AppText style={styles.price}>$100</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/img/mosh.jpg")}
            title={"Mosh Hamedani"}
            subTitle={"5 Listing"}
          />
        </View>
      </View>
    </View>
  );
};

// - Styles
const styles = StyleSheet.create({
  baseContainer: {},
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 40,
  },
});

// - Exports
export default ListingDetailsScreen;
