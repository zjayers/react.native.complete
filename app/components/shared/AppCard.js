// - Imports
import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { Image } from 'react-native-expo-image-cache';
import { colors } from '../../theme/colors';
import AppText from './AppText';

/**
 * AppCard Component
 * @returns {JSX.Element} - JSX to be rendered to the screen
 */
const AppCard = ({
  title, subTitle, imageUrl, thumbnailUrl, onPress,
}) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <View style={styles.baseContainer}>
      <Image
        uri={imageUrl}
        style={styles.image}
        preview={{ uri: thumbnailUrl }}
        tint="light"
      />
      <View style={styles.detailContainer}>
        <AppText style={styles.title} numberOfLines={1}>
          {title}
        </AppText>
        <AppText style={styles.subTitle} numberOfLines={1}>
          $
          {subTitle}
        </AppText>
      </View>
    </View>
  </TouchableWithoutFeedback>
);

// - Styles
const styles = StyleSheet.create({
  baseContainer: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
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
    fontWeight: 'bold',
    color: colors.secondary,
  },
});

// - Exports
export default AppCard;
