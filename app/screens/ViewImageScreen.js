// - Imports
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { colors } from '../theme/colors';

/**
 * ViewImageScreen Component
 * @returns {JSX.Element} - JSX to be rendered to the screen
 */
const ViewImageScreen = (props) => {
  const iconSize = 35;

  return (
    <View style={styles.imageContainer}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons
          name="close"
          color={colors.white}
          size={iconSize}
        />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color={colors.white}
          size={iconSize}
        />
      </View>
      <Image
        source={require('../assets/img/chair.jpg')}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
};

// - Styles
const styles = StyleSheet.create({
  closeIcon: {
    position: 'absolute',
    top: 40,
    left: 30,
  },
  deleteIcon: {
    position: 'absolute',
    top: 40,
    right: 30,
  },
  imageContainer: {
    backgroundColor: colors.black,
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

// - Exports
export default ViewImageScreen;
