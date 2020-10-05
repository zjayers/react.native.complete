// - Imports
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Image } from 'react-native-expo-image-cache';
import ListItem from '../components/list-item/ListItem';
import AppButton from '../components/shared/AppButton';
import AppText from '../components/shared/AppText';
import { colors } from '../theme/colors';

/**
 * ListingDetailsScreen Component
 * @returns {JSX.Element} - JSX to be rendered to the screen
 */
const ListingDetailsScreen = ({ route }) => {
  const { images, title, price } = route.params;

  return (
    <View style={styles.baseContainer}>
      <Image
        uri={images[0].url}
        preview={{ uri: images[0].thumbnailUrl }}
        tint="light"
        style={styles.image}
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.price}>
          $
          {price}
        </AppText>
        <View style={styles.buttonContainer}>
          <AppButton title="Add to cart" />
        </View>
        <View style={styles.userContainer}>
          <ListItem
            image={require('../assets/img/user.jpg')}
            title="John Smith"
            subTitle="5 Listing"
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
    width: '100%',
    height: 300,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
  },
  buttonContainer: {
    marginTop: 10,
  },
  price: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 10,
  },
});

// - Exports
export default ListingDetailsScreen;
