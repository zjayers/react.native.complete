// - Imports
import React from 'react';
import {
  KeyboardAvoidingView, Platform, ScrollView, StyleSheet, View,
} from 'react-native';
import { Image } from 'react-native-expo-image-cache';
import ContactSellerForm from '../components/forms/ContactSellerForm';
import ListItem from '../components/list-item/ListItem';
import AppText from '../components/shared/AppText';
import { colors } from '../theme/colors';

/**
 * ListingDetailsScreen Component
 * @returns {JSX.Element} - JSX to be rendered to the screen
 */
const ListingDetailsScreen = ({ route }) => {
  const listing = route.params;
  const { images, title, price } = listing;

  return (
    <KeyboardAvoidingView
      style={styles.baseContainer}
      behavior="position"
      keyboardVericalOffset={Platform.OS === 'ios' ? 0 : 100}
    >
      <ScrollView>
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
          <View style={styles.userContainer}>
            <ListItem
              image={require('../assets/user.jpg')}
              title="John Smith"
              subTitle="5 Listing"
            />
          </View>
          <ContactSellerForm listing={listing} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
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
    height: 250,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
  },
  price: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 5,
  },
});

// - Exports
export default ListingDetailsScreen;
