// - Imports
import React from "react";
import { FlatList, StyleSheet } from "react-native";
import AppCard from "../components/shared/AppCard";
import SafeArea from "../components/SafeArea";
import { colors } from "../theme/colors";

const mockListings = [
  {
    id: 1,
    title: "Red Jacket",
    price: "$400",
    image: require("../assets/img/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch",
    price: "$1000",
    image: require("../assets/img/couch.jpg"),
  },
];

/**
 * ListingsScreen Component
 * @returns {JSX.Element} - JSX to be rendered to the screen
 */
const ListingsScreen = (props) => {
  return (
    <SafeArea style={styles.baseContainer}>
      <FlatList
        data={mockListings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <AppCard
            title={item.title}
            subTitle={item.price}
            image={item.image}
          />
        )}
      />
    </SafeArea>
  );
};

// - Styles
const styles = StyleSheet.create({
  baseContainer: {
    padding: 20,
    backgroundColor: colors.lightGray,
  },
  primaryText: {
    fontSize: 30,
  },
});

// - Exports
export default ListingsScreen;
